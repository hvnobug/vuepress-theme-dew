<template>
    <LoadingPage v-if="firstLoad"/>
</template>
<script>
    export default {
        data(){
            return{
                firstLoad: true
            }
        },
        methods:{
            handleLoading() {
                const time = this.$frontmatter.home && sessionStorage.getItem('firstLoad') == undefined ? 1000 : 0;
                setTimeout(() => {
                    this.firstLoad = false
                    if (sessionStorage.getItem('firstLoad') == undefined) sessionStorage.setItem('firstLoad', false)
                }, time)
            },
        },
        mounted(){
            this.handleLoading();
        }

    }
</script>
