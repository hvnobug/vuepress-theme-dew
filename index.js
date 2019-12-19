const path = require('path');

// Theme API.
module.exports = (options, ctx) => {
    const {themeConfig, siteConfig} = ctx;

    // resolve algolia
    const isAlgoliaSearch = (
        themeConfig.algolia
        || Object
            .keys(siteConfig.locales && themeConfig.locales || {})
            .some(base => themeConfig.locales[base].algolia)
    );

    const enableSmoothScroll = themeConfig.smoothScroll === true;

    return {
        alias() {
            return {
                '@AlgoliaSearchBox': isAlgoliaSearch
                    ? path.resolve(__dirname, 'components/AlgoliaSearchBox.vue')
                    : path.resolve(__dirname, 'noopModule.js')
            }
        },

        plugins: [
            'tabs',
            'flowchart',
            '@vuepress/search',
            'reading-progress',
            '@vuepress/back-to-top',
            '@vuepress/plugin-nprogress',
            [
                '@vuepress/active-header-links',
                options.activeHeaderLinks
            ],
            ['@goy/svg-icons', {
                svgsDir: 'icons',
                iconIdPrefix: 'icon-'
            }],
            ['container', {
                type: 'tip',
                defaultTitle: ''
            }],
            ['container', {
                type: 'warning',
                defaultTitle: ''
            }],
            ['container', {
                type: 'danger',
                defaultTitle: ''
            }],
            ['container', {
                type: 'block',
                defaultTitle: '',
            }],
            ['smooth-scroll', enableSmoothScroll],
            [
                'vuepress-plugin-zooming',
                {
                    selector: '.theme-dew-content :not(a) > img',
                    delay: 1000,
                    options: {
                        bgColor: 'black',
                        zIndex: 10000
                    },
                },
            ],

        ]
    }
};
