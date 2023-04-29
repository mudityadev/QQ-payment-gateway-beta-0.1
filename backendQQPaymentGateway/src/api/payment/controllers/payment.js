'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const { validateTransaction, processTransaction } = require('./helpers.js');
const CryptoJS = require('crypto-js');

module.exports = createCoreController('api::payment.payment', ({ strapi }) => ({

    async create(ctx) {
        const currentUser = ctx.state.user;

        const { data } = ctx.request.body;
        const { amount, currency } = data; // Correct destructuring

        const keyPair = await strapi.db.query('api::key.key').findOne({
            where: { publish_key: data.publish_key }
        });

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
        console.log(recipientWallet);
        const senderWallet = await strapi.db.query('api::wallet.wallet').findOne({
            where: { user: currentUser }
        });
        console.log(senderWallet);
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
        console.log("working");

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
    },

    // async checkout(ctx) {
    //     console.log("Connect-Interface Working...");
    //     const { publish_api, secret_api, product_code, amount, currency } = ctx.request.body;
    //     const currentUser = ctx.state.user;

    //     const keyPair = await strapi.db.query('api::key.key').findOne({
    //         where: { publish_key: publish_api }
    //     });

    //     console.log(keyPair.secret_key);
    //     if (secret_api == keyPair.secret_key) {
    //         console.log("secret code is matching..proceed");

    //         // Modify the ctx.request.body to include the necessary data for the create method
    //         ctx.request.body.data = {
    //             publish_key: publish_api,
    //             amount,
    //             currency
    //         };

    //         // Call the 'create' method if the secret API key matches
    //         await this.create(ctx);
    //     }
    // }

}));
