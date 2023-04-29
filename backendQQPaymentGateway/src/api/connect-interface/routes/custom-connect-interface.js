module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/connect-interface/checkout',
            handler: 'connect-interface.checkoutPayment',
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
