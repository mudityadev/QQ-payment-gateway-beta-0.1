'use strict';

/**
 * payment router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::payment.payment');


// module.exports = {
//     routes: [
//         {
//             method: 'POST',
//             path: '/payment/checkout',
//             handler: 'payment.checkout',
//         },


//         // {
//         //     method: 'GET',
//         //     path: '/order/success',
//         //     handler: 'order.success',
//         //     config: {
//         //         auth: false,
//         //     }
//         // },
//     ],
// };
