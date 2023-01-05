'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
    
    async getUserPosts(ctx) {
        
        const user = ctx.state.user

        const entries = await strapi.entityService.findMany('api::blog.blog', {
            populate: '*',
            filters: {
                author: user.id
            }
        })
        // console.log(entries)
        ctx.body = entries
    },

    async getAllPostsFilters(ctx) {
        const entries = await strapi.entityService.findMany('api::blog.blog', {
            populate: '*',
            filters: {}
        })
        // console.log(entries)
        ctx.body = entries
    }
}));
