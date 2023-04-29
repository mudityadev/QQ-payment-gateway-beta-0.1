'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const solana = require('@solana/web3.js');
const CryptoJS = require('crypto-js');
const Joi = require('joi');

module.exports = createCoreController('api::key.key', ({ strapi }) => ({

    async getKey(ctx){
        const { currentUser } = ctx.request.body;

        // console.log(currentUser) 

        const user = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username: currentUser }
        })


        const merchantAccount = await strapi.db.query('api::merchant.merchant').findOne({
            where: { user: user },
        });
        console.log(merchantAccount);



        const KeyMerchant = await strapi.db.query('api::key.key').findMany({
            where: { merchant: merchantAccount },
        });


        console.log(KeyMerchant)

        return KeyMerchant;


    },

    async create(ctx) {
        // const user = ctx.state.user;
        const { currentUser } = ctx.request.body;

        // console.log(currentUser) 

        const user = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username: currentUser }
        })

        // Input validation using Joi
        // const schema = Joi.object({

        //     title_key: Joi.string().min(2).max(100).required(),
        // });

        // const { error } = schema.validate(ctx.request.body);

        // if (error) {
        //     return ctx.badRequest('Invalid input', error.details);
        // }

        const { title_key } = ctx.request.body;

        if (userHasBusinessAccount(user)) {
            try {
                const currentMerchant = await findMerchantByUser(user);

                if (currentMerchant) {
                    const newKey = await createKeyForMerchant(currentMerchant, title_key);
                    console.log(newKey);
                    ctx.body = newKey;
                } else {
                    ctx.notFound('Merchant account not found');
                }
            } catch (err) {
                console.error(err);
                ctx.internalServerError('An error occurred while generating the key');
            }
        } else {
            ctx.forbidden('User does not have a merchant account');
        }
    },
}));

async function findMerchantByUser(user) {
    return await strapi.db.query('api::merchant.merchant').findOne({
        where: { user: user },
    });
}

async function createKeyForMerchant(merchant, title_key) {
    const keypair = generateSolanaKeypair();
    const publishKey = keypair.publicKey.toBase58();
    const secretKey = CryptoJS.lib.WordArray.random(32).toString();

    return await strapi.entityService.create('api::key.key', {
        data: {
            publish_key: publishKey,
            secret_key: secretKey,
            merchant: merchant,
            title: title_key,
        },
    });
}

function userHasBusinessAccount(user) {
    return user.is_merchant;
}

function generateSolanaKeypair() {
    return solana.Keypair.generate();
}
