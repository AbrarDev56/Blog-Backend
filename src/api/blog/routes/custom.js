module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/usergetposts',
            handler: 'blog.getUserPosts'
            // config: {
            //     auth: false,
            // }
        },
        {
            method: 'GET',
            path: '/getallpostsfilters',
            handler: 'blog.getAllPostsFilters'
            // config: {
            //     auth: false,
            // }
        }
    ]
}