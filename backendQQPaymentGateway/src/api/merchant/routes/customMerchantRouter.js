module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/merchant/getBusinessInfo',
            handler: 'merchant.getBusinessInfo',
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
