<template>
    <div class="loading-container">
        <template v-if="$frontmatter.home">
            <span class="loading-title">{{loadingPage.title}}</span>
            <p class="loading-description">{{loadingPage.description}}</p>
        </template>
        <img :src="loadingPage.image" class="loading-img"/>
    </div>
</template>
<script>
    export default {
        computed: {
            loadingPage() {
                return Object.assign({
                    image: 'https://cdn.jsdelivr.net/gh/hvnobug/assets/home/images/loading.gif',
                    title: this.$site.title || this.$localeConfig.title || this.$site.themeConfig.title,
                    description: this.$site.description || this.$localeConfig.description || this.$site.themeConfig.description
                }, this.$site.themeConfig.loadingPage || {});
            }
        }
    }
</script>
<style lang="stylus">
    .loading-container
        position fixed
        top 0
        left 0
        bottom 0
        right 0
        z-index 10010
        height 100vh
        display flex
        flex-direction column
        justify-content: center
        align-items center
        background-color $bgColor

        .loading-title
            margin 8rem auto 2rem
            text-align center
            color $textColor
            font-size 3rem
            box-sizing border-box
            padding 0 10px;
            text-shadow 0 2px 10px rgba(0, 0, 0, 0.2)

        .loading-description
            margin 2rem auto
            text-align center
            color $textColor
            font-size 2rem
            box-sizing border-box;
            padding 0 10px;
            text-shadow 0 2px 10px rgba(0, 0, 0, 0.2)

        .loading-img
            max-width 80%
            height auto
</style>
