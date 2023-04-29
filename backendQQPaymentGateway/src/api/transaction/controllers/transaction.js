'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const { validateTransaction, processTransaction } = require('./helpers.js');
const CryptoJS = require('crypto-js');

module.exports = createCoreController('api::transaction.transaction', ({ strapi }) => ({
    async sendMoney(ctx) {
        const { currentUser, recipientPublicAddress, amount, currency } = ctx.request.body;
        const gasFee = 0.2;
        const transactionFee = 0.2;

        const signature = CryptoJS.lib.WordArray.random(16).toString();
        const nonce = CryptoJS.lib.WordArray.random(32).toString();
        const ModelUser = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username: currentUser }
        })

        const senderWallet = await strapi.db.query('api::wallet.wallet').findOne({
            where: { user: ModelUser }
        });

        const recipientWallet = await strapi.db.query('api::wallet.wallet').findOne({
            where: { public_address: recipientPublicAddress }
        });

        console.log(recipientWallet);
        if (senderWallet.amount < amount) {
            ctx.throw(400, 'Insufficient balance to complete the transaction.');
        }
        console.log(senderWallet.amount);

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

        // console.log("working........till here")

        // console.log(newTransaction);

        // if (!recipientWallet) {
        //     // ctx.throw(400, 'Recipient wallet not found.');

        //     return "Recipient wallet not found."
        // }

        
        // console.log(recipientWallet);
        // console.log(amount);

        // const updatedRecipientAmount = recipientWallet.amount + amount;
        // const updatedRecipientAmount = recipientWallet.amount + 89;

        // console.log(updatedRecipientAmount);
        // console.log(amount); // showing undefine

        // const updateMerchant = await strapi.entityService.update('api::wallet.wallet', recipientWallet.id, {
        //     data: {
        //         amount: updatedRecipientAmount,
        //     },
        // });
        // console.log(updateMerchant)

        // const updatedSenderAmount = senderWallet.amount - amount;
        // const updateUser = await strapi.entityService.update('api::wallet.wallet', senderWallet.id, {
        //     data: {
        //         amount: updatedSenderAmount,
        //     },
        // });

        // console.log(updateUser)

        // ctx.body = {
        //     newTransaction
        // };

            // console.log(updatedRecipientAmount);
            // console.log(updatedSenderAmount);
            // console.log("Completed work, now returning")
        return newTransaction;

       
      

    }
}));
