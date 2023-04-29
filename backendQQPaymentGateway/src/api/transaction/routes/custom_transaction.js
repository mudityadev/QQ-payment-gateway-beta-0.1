module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/transaction/send_money',
            handler: 'transaction.sendMoney',
        },


        // {
        //     method: 'GET',
        //     path: '/order/success',
        //     handler: 'order.success',
        //     config: {
        //         auth: false,
        //     }
        // },
    ],
};
