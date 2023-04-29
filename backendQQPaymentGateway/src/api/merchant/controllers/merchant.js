'use strict';

const { createCoreController } = require('@strapi/strapi').factories;
const solana = require('@solana/web3.js');
const bip39 = require('bip39');
const CryptoJS = require('crypto-js');
const Joi = require('joi');

module.exports = createCoreController('api::merchant.merchant', ({ strapi }) => ({
    async getBusinessInfo(ctx) {
        try { 
             const {currentUser}  = ctx.request.body;
        
        // console.log(currentUser) 

        const user = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username: currentUser }
        })
        if (!userHasBusinessAccount(user)){
            ctx.body = "User does'nt have business";
        }


        const merchantInfo = await strapi.db.query('api::merchant.merchant').findOne({
            where: { user: user }
        })


        // console.log(merchantInfo)
            return merchantInfo;
        } catch (error) {
         return "merchant don't have account"
        }
    },
   
    async create(ctx) {

        // const { currentUser } = ctx.request.body;
        const { takeUser } = ctx.request.body;
        console.log(takeUser)

        const user = await strapi.db.query('plugin::users-permissions.user').findOne({
            where: { username: takeUser }
        })

        // const user = ctx.state.user;

        // Input validation using Joi
        const schema = Joi.object({
            takeUser: Joi.string().required(),
            business_name: Joi.string().required(),
        });


        const { error } = schema.validate(ctx.request.body);

        if (error) {
            return ctx.badRequest('Invalid input', error.details);
        }

        const { business_name } = ctx.request.body;

        try {
            if (userHasBusinessAccount(user)) {
                return ctx.badRequest('User already has a Business Account');
            }

            const newBusinessAccount = await createBusinessAccount(user, business_name);
            await connectUserToBusinessAccount(user);
            await createDefaultKeys(newBusinessAccount);

            ctx.body = newBusinessAccount;
        } catch (err) {
            console.error(err);
            ctx.internalServerError('An error occurred while creating the business account');
        }
    },
}));

async function createBusinessAccount(user, business_name) {
    return await strapi.entityService.create('api::merchant.merchant', {
        data: {
            user: user,
            business_name: business_name,
        },
    });
}

async function connectUserToBusinessAccount(user) {
    return await strapi.entityService.update('plugin::users-permissions.user', user.id, {
        data: {
            is_merchant: true,
        },
    });
}

async function createDefaultKeys(newBusinessAccount) {
    const keypair = generateSolanaKeypair();
    const publishKey = keypair.publicKey.toBase58();
    const secretKey = CryptoJS.lib.WordArray.random(32).toString();

    return await strapi.entityService.create('api::key.key', {
        data: {
            publish_key: publishKey,
            secret_key: secretKey,
            merchant: newBusinessAccount,
            title: 'Default Key',
        },
    });
}   

function userHasBusinessAccount(user) {
    return user.is_merchant;
}

function generateSolanaKeypair() {
    return solana.Keypair.generate();
}
