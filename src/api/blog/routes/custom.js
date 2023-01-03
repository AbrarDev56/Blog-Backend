module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/usergetposts',
            handler: 'blog.getUserPosts'
            // config: {
            //     auth: false,
            // }
        }
    ]
}