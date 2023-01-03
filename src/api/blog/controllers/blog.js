'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
    // async getUserPosts(ctx) {

    //     // some custom logic here
    //     // ctx.query = { 
    //     //     ...ctx.query, 
    //     //     local: 'en',
    //     //     populate: 'author'
    //     // };

    //     const user = ctx.state.user.id;

    //     ctx.query.filters = {
    //         ...(ctx.query.filters || {}),
    //         author: user
    //     };
    //     // Calling the default core action
    //     // const { data } = await super.find(ctx);


    //     // some more custom logic
    //     // meta.date = Date.now();
    //     const data = find(ctx)
    //     return { data };
    //   },
    async getUserPosts(ctx) {
        // const { id } = ctx.request.params
        const user = ctx.state.user

        const entries = await strapi.entityService.findMany('api::blog.blog', {
            populate: '*',
            filters: {
                author: user.id
            }
        })
        // console.log(entries)
        ctx.body = entries
    }
}));
