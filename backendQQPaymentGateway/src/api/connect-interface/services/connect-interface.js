'use strict';

/**
 * connect-interface service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::connect-interface.connect-interface');
