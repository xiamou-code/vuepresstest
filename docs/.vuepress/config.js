const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
    lang: 'zh-CN',
    title: '你好，欢迎学习前端开发！',
    description: '这是我的第一个 VuePress 站点',
    theme: defaultTheme({
        // 在这里进行配置
        navbar: [
            // NavbarItem
            {
                text: '首页',
                link: '/'
            },
            {
                text: 'JavaScript',
                link: '/javascript/',
            },
            {
                text: 'Vue.js',
                link: '/vue/'
            },
            {
                text: 'Node.js',
                link: '/nodejs/'
            },
            {
                text: '项目实战',
                children: [
                    { text: '恋爱商城', link: '/project/loveshop' },
                    { text: '大唐官员管理系统', link: '/project/tangofficials' }
                ]
            },
            {
                text: '面试',
                link: '/interview/'
            },
            {
                text: 'Algorithm/JS',
                children: [
                    { text: '简单', link: '/algorithm/base.md' },
                    { text: '普通', link: '/algorithm/intermediate.md' },
                    { text: '困难', link: '/algorithm/advanced.md' }
                ]
            }
        ],

    }),
}