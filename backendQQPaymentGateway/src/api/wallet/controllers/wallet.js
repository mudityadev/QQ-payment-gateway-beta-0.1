'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const solana = require('@solana/web3.js');
const bip39 = require('bip39');

module.exports = createCoreController('api::wallet.wallet', ({ strapi }) => ({
    

    async getWallet(ctx) {
        // const user = ctx.state.user;
        // console.log("working--------------------")
        const { currentUser } = ctx.request.body;
        console.log(currentUser)
        const user = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username: currentUser }
        })
        if (!userHasWallet(user)) {
            return ctx.badRequest('User not have wallet');
        }
        const userWallet = await strapi.db.query('api::wallet.wallet').findOne({
            where: { user: user }
        });
        console.log(userWallet);

        return userWallet;
    },

    async create(ctx) {
        const user = ctx.state.user;

        if (userHasWallet(user)) {
            return ctx.badRequest('User already has a wallet');
        }

        const keypair = generateSolanaKeypair();
        const publicKey = keypair.publicKey.toBase58();
        const privateKey = keypair.secretKey.toString('hex');
        const passphrase = generatePassphrase();

        const newWallet = await createWallet(user, publicKey, privateKey, passphrase);
        console.log(newWallet);

        const is_wallet_true = await updateWalletStatus(user);
        console.log(is_wallet_true);


        return { address: publicKey, passphrase: passphrase, private_key: privateKey };
    }
}));

function userHasWallet(user) {
    return user.is_wallet;
}

function generateSolanaKeypair() {
    return solana.Keypair.generate();
}

function generatePassphrase() {
    return bip39.generateMnemonic();
}

async function createWallet(user, publicKey, privateKey, passphrase) {

    // create a pdf and save it into 
    // const pdfFile
    return await strapi.entityService.create('api::wallet.wallet', {
        data: {
            user: user,
            amount: 200,
            public_address: publicKey,
            private_address: privateKey,
            passphrase: passphrase,
            // qr : pdfFile
        },
    });
}

async function updateWalletStatus(user) {
    return await strapi.entityService.update('plugin::users-permissions.user', user.id, {
        data: {
            is_wallet: true,
        },
    });
}
