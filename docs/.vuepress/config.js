module.exports = {
    title: 'Calico-UI',
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'Calico-UI 🐱',
            description: 'Vue-powered Application Component Lib'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Calico-UI 🐱',
            description: 'Vue 驱动的应用型组件库'
        }
    },
    themeConfig: {
        locales: {
            '/': {
                nav: [
                    {
                        text: 'Document',
                        link: '/document'
                    },
                    {
                        text: 'Guide',
                        link: '/guide'
                    },
                    {
                        text: 'GitHub',
                        link: 'https://github.com/Y-FE/calico'
                    }
                ]
            },
            '/zh/': {
                selectText: '选择语言'
            }
        },
        nav: [
            {
                text: '文档',
                link: '/zh/document'
            },
            {
                text: '快速上手',
                link: '/zh/guide'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/Y-FE/calico'
            }
        ]
    }
};
