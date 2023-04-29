'use strict';

/**
 * Connect-interface controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const CryptoJS = require('crypto-js');
const { validateTransaction, processTransaction } = require('./helpers.js'); // Added missing imports

module.exports = createCoreController('api::connect-interface.connect-interface', ({ strapi }) => ({
    async checkoutPayment(ctx) {
        try {
            console.log("Connect-Interface Working...");
            const { publish_api, secret_api, product_code, amount, currency } = ctx.request.body;
            const currentUser = ctx.state.user;

            const keyPair = await strapi.db.query('api::key.key').findOne({
                where: { publish_key: publish_api }
            });
// console.log(keyPair)
            // console.log(keyPair.secret_key);
            if (secret_api == keyPair.secret_key){
                // console.log("secret code is matching..proceed");
                const sessionId = CryptoJS.lib.WordArray.random(32).toString(); // TODO: implement session ID generation
                
                const merchantAccount = await strapi.db.query('api::merchant.merchant').findOne({
                    where: { keys: keyPair }
                });
                
                const user = await strapi.db.query('plugin::users-permissions.user').findOne({
                    where: { merchant: merchantAccount },
                });

                const recipientWallet = await strapi.db.query('api::wallet.wallet').findOne({
                    where: { user: user }
                });

                const recipientPublicAddress = recipientWallet.public_address;
                // console.log(recipientPublicAddress);
                // console.log(recipientWallet);
                console.log(currentUser)
                const senderWallet = await strapi.db.query('api::wallet.wallet').findOne({
                    where: { user: currentUser }
                });
                // console.log(senderWallet);
                const gasFee = 0.2;
                const transactionFee = 0.2;

                const signature = CryptoJS.lib.WordArray.random(16).toString();
                const nonce = CryptoJS.lib.WordArray.random(32).toString();

                // Check if the sender has sufficient balance
                if (senderWallet.amount < amount) {
                    ctx.throw(400, 'Insufficient balance to complete the transaction.');
                }

                const validationResult = validateTransaction({
                    senderPublicKey: senderWallet.public_address,
                    recipientPublicAddress,
                    amount,
                    transactionFee,
                    nonce,
                    signature,
                    currency,
                    gasFee
                });

                if (!validationResult.success) {
                    ctx.throw(400, validationResult.message);
                }

                const transactionResult = await processTransaction({
                    sender: currentUser.wallet,
                    recipientPublicAddress,
                    amount,
                    transactionFee,
                    nonce,
                    signature,
                    currency,
                    gasFee
                });

                if (!transactionResult.success) {
                    ctx.throw(400, transactionResult.message);
                }

                const newTransaction = await strapi.entityService.create('api::transaction.transaction', {
                    data: {
                        sender_public_key: senderWallet.public_address,
                        receiver_public_key: recipientPublicAddress,
                        amount,
                        wallet: senderWallet.id,
                        status: 'Completed',
                        currency,
                        gas_fee: gasFee,
                        nonce,
                        signature,
                        transaction_id: transactionResult.transactionId,
                        block_number: transactionResult.blockNumber,
                        timestamp: transactionResult.timestamp
                    },
                });

                const updatedRecipientAmount = recipientWallet.amount + amount;
                await strapi.entityService.update('api::wallet.wallet', recipientWallet.id, {
                    data: {
                        amount: updatedRecipientAmount,
                    },
                });

                const updatedSenderAmount = senderWallet.amount - amount;
                await strapi.entityService.update('api::wallet.wallet', senderWallet.id, {
                    data: {
                        amount: updatedSenderAmount,
                    },
                });

                ctx.body = {
                    newTransaction
                };

                // making new change
                return newTransaction;
            
            }

            // console.log(`Secret API Key: ${secret_api}`);
            // console.log(`Product Code: ${product_code}`);
            // console.log(`Amount: ${amount}`);


            ctx.status = 200;
            ctx.body = { sessionId };
        } catch (err) {
            strapi.log.error(err);
            ctx.status = 500;
            ctx.body = { error: 'Internal Server Error' };
        }
    }
}));
