<template>
    <footer>
        <div class="github-badge" v-for="(item) in footer">
            <a :href="item.link.url" v-if="item.link && item.link.url"
               :rel="`${item.link.external?'external nofollow noopener noreferrer':''}`"
               :target="`${item.link.target?item.link.target:item.link.external?'_blank':''}`">
                <span class="badge-subject">{{item.name}}
                    <vp-icon :name="item.icon.name" v-if="item.icon && item.icon.name"
                             :color="item.icon.color" :size="item.icon.size"/>
                </span>
                <span class="badge-value">{{item.value}}</span>
            </a>
            <template v-else>
                <span class="badge-subject">{{item.name}}
                   <vp-icon :name="item.icon.name" v-if="item.icon && item.icon.name"
                            :color="item.icon.color" :size="item.icon.size"/>
                </span>
                <span class="badge-value">{{item.value}}</span>
            </template>
        </div>
    </footer>
</template>
<script>
    import {isExternal} from '../util';

    export default {
        computed: {
            footer() {
                const footer = Object.assign({
                    Powered: {
                        text: 'Vuepress',
                        link: {
                            url: 'https://vuepress.vuejs.org/',
                            target: '_blank'
                        },
                        icon: {
                            name: 'power'
                        }
                    },
                    Theme: {
                        text: 'Dew',
                        link: {
                            url: '/pages/theme-document/'
                        },
                        icon: {
                            name: 'theme'
                        }
                    }
                }, this.$site.themeConfig.footer || {});
                const footerKeys = Object.keys(footer);
                return footerKeys.map(key => {
                    const item = footer[key];
                    const result = {name: key, value: item.text || 'Unknown'};
                    if (item.link && item.link.url) {
                        const link = {...item.link};
                        link.external = isExternal(link.url);
                        result.link = link;
                    }
                    if (item.icon) {
                        if (typeof item.icon === 'string') {
                            result.icon = {
                                name: item.icon
                            };
                        } else if (typeof item.icon === 'object' && item.icon.name) {
                            result.icon = item.icon;
                        }
                    }
                    return result;
                });
            }
        }
    }
</script>
<style lang="stylus">

    .footer
        text-align center
        padding 2rem 1rem;

        &.home-footer
            margin-left 0

        &.page-footer
            margin-left $sidebarWidth

        .github-badge
            display: inline-block
            border-radius: 4px
            text-shadow: none
            font-size: 12px
            color: #fff
            line-height: 15px
            background-color: #ABBAC3
            margin: 5px 5px 5px 0

            a
                color: #EEE

            .badge-subject
                display: inline-block
                background-color: #4D4D4D
                padding: 4px 4px 4px 6px
                border-top-left-radius: 4px
                border-bottom-left-radius: 4px


            .badge-value
                display: inline-block
                padding: 4px 6px 4px 4px
                border-top-right-radius: 4px
                border-bottom-right-radius: 4px

            &:nth-child(4n+1)
                .badge-value
                    background-color: #007EC6 !important


            &:nth-child(4n+2)
                .badge-value
                    background-color: #4DC820 !important


            &:nth-child(4n+3)
                .badge-value
                    background-color: #8833D7 !important


            &:nth-child(4n)
                .badge-value
                    background-color: #e05d44 !important


    @media (max-width: $MQMobile)
        .footer
            padding 1rem 0.5rem !important
            margin-left 0 !important
</style>
