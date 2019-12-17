<template>

</template>
<script>
    export default {
        mounted() {
            const script = document.createElement('script');
            script.src = '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js';
            script.type = 'text/javascript';
            script.setAttribute('charset','utf-8');
            script.setAttribute('homePageUrl','/');
            script.setAttribute('homePageName','返回主页');
            document.body.append(script)
        }
    }
</script>
