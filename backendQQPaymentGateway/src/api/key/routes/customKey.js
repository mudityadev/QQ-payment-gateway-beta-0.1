module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/key/getKey',
            handler: 'key.getKey',
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
