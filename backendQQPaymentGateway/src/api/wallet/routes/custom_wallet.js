module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/wallets/get_wallet',
            handler: 'wallet.getWallet',
        },
    ],
};
