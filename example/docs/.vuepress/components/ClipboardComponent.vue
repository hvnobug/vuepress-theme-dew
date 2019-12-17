<template>
    <div>
        <p>
            著作权归 {{ $page.frontmatter.author || $site.themeConfig.author || $siteTitle || 'Hvnobug' }} 所有。
            链接：<a :href="location"> {{ location }} </a>
        </p>
        <div v-html="html" />
    </div>
</template>

<script>
    export default {
        props: ['html'],
        created() {
            this.location = window.location
        },
    }
</script>