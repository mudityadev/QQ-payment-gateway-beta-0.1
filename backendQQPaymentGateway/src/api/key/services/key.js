'use strict';

/**
 * key service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::key.key');
