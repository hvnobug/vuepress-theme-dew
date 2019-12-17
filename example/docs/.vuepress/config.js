module.exports = {
    title: "Hvnobug",
    description: "Welcome to my vuepress website !",
    theme: require.resolve('../../../'),
    head: [
        ['link', {
            rel: 'icon',
            href: 'https://cdn.jsdelivr.net/gh/hvnobug/assets/common/favicon.ico',
            type: 'image/x-icon, image/vnd.microsoft.icon'
        }]
    ],
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        author: "Emil",
        site: "https://hvnobug.com",
        typed: {
            enable: true,
            hitokoto: true
        },
        sidebar: [

            {
                title: '基础',   // 必要的
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    '/pages/theme-document/',
                    '/pages/theme-document/basics/install.html',
                    '/pages/theme-document/basics/quick-start.html'
                ]
            },

            {
                title: '进阶',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/pages/theme-document/advanced/',
                    '/pages/theme-document/advanced/sidebar.html',
                    '/pages/theme-document/advanced/navbar.html',
                    '/pages/theme-document/advanced/footer.html',
                    '/pages/theme-document/advanced/typed.html',
                    '/pages/theme-document/advanced/icon.html',
                    '/pages/theme-document/advanced/404.html'
                ]
            },
            {
                title: '扩展',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/pages/theme-document/extension/markdown',
                    '/pages/theme-document/extension/comment-plugin.html',

                ]
            },
            {
                title: '可选',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/pages/theme-document/optional/smooth-scroll.html',
                    '/pages/theme-document/optional/copy-code.html',
                    '/pages/theme-document/optional/lazy-img.html',
                    '/pages/theme-document/optional/code-tab.html',
                    '/pages/theme-document/optional/mathjax-render.html',
                    '/pages/theme-document/optional/tocs.html',
                    '/pages/theme-document/optional/copyright.html',
                    '/pages/theme-document/optional/resume.html'
                ]
            }
        ],
        avatar: 'https://cdn.jsdelivr.net/gh/hvnobug/assets/common/avatar.png',  // 头像
        logo: 'https://cdn.jsdelivr.net/gh/hvnobug/assets/common/logo.png',      // Logo
        footer: {
            Copyright: {
                text: '豫ICP备18037410号-2',
                icon: {
                    name: 'beian',
                },
                link: {
                    url: 'http://www.miitbeian.gov.cn/'
                }
            },
            Author: {
                text: 'Hvnobug',
                icon: {
                    name: 'author'
                },
                link: {
                    url: '/'
                }
            },
        },
        nav: [
            // 可在每一项中添加 icon 字段来显示图标
            {
                text: '主页', link: '/',
                icon: 'home'
            },
            {
                text: '关于',
                link: '/pages/about/',
                icon: 'about'
            },
            {
                text: '主题文档',
                icon: 'document',
                link: '/pages/theme-document/'
            },
            {
                text: '博客',
                link: 'https://blog.hvnobug.com/',
                icon: 'blog'
            },
            {
                text: '简历',
                link: '/pages/resume/',
                icon: 'resume',
                route: false
            },
            {
                text: 'GitHub',
                icon: 'github',
                link: 'https://github.com/hvnobug/'
            }
        ]
    },
    host: 'localhost',
    port: '7788',
    dest: 'dist',
    plugins: [
        'img-lazy',
        'code-switcher',
        'vuepress-plugin-smooth-scroll',
        ["vuepress-plugin-code-copy", {
            successText: '复制成功!',
            color: '#fdfdfd'
        }],
        'vuepress-plugin-global-toc',
        'vuepress-plugin-table-of-contents',
        [
            'vuepress-plugin-mathjax',
            {
                target: 'svg',
                macros: {
                    '*': '\\times',
                    '\\Z': '\\mathbb{Z}'
                },
            },
        ],
        [
            'vuepress-plugin-comment',
            {
                /* 使用 valine 请修改对应的 appId/appKey
                choosen: 'valine',
                options: {
                    el: '#vuepress-plugin-comment',
                    appId: '<your app id>',
                    appKey: '<your app key>',
                    path: '<%- frontmatter.commentid || frontmatter.permalink || frontmatter.to.path %>'
                }
                */
            }
        ],
        [
            'copyright',
            {
                noCopy: false, // 选中的文字将无法被复制
                minLength: 50, // 如果长度超过 100 个字符
                authorName: "Hvnobug"
            },
        ],
    ]
};
