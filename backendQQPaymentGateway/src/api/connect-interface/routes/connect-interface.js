'use strict';

/**
 * connect-interface router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::connect-interface.connect-interface');
