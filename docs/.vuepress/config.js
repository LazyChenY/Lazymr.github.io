module.exports = {
    title: "Lazymr's blog",
    dest: './dist',
    base: '/blog/',
    description: 'Frontend JavaScript CSS',
    repo: 'git@github.com:LazyChenY/blog.git',
    port: 9995,
    head: ['link', {rel: 'icon', href: '/avtor.jpeg'}],
    themeConfig: {
        nav: [{
            text: 'Blog',
            link: '/article/JavaScript/clipboard'
        }, {
            text: 'Project',
            link: '/project/flex/flex'
        }, {
            text: 'Resume',
            link: '/aboutMe'
        }],
        sidebarDepth: 3,
        sidebar: {
            '/article/': [
                'JavaScript/clipboard',
                'JavaScript/screen/screen',
                'JavaScript/extension',
                'JavaScript/browser',
                'JavaScript/webpack/webpack-s1',
                'JavaScript/webpack/webpack-s2',
                'JavaScript/reconstruction/reconstruction',
                // 'JavaScript/promise',
                // 'JavaScript/spa-mpa',
                // 'JavaScript/ui-components-lib',
                // 'JavaScript/engineering',
                // 'CSS/adaptive',
                'JavaScript/api-rules',
                'JavaScript/token'
            ],
            '/project/': [
                'flex/flex',
                'flappyBird/flappyBird'
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@img': 'images'
            }
        }
    }
}