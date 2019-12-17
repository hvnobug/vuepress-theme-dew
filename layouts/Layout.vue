<template>
    <div class="theme-container" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
        <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>
        <div class="sidebar-mask" @click="toggleSidebar(false)"></div>
        <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
            <slot name="sidebar-top" #top/>
            <slot name="sidebar-bottom" #bottom/>
        </Sidebar>
        <div class="page-content animated
         fadeInDown">
            <transition enter-active-class="animated fadeInDown">
                <Home v-if="$page.frontmatter.home"/>
                <Page v-else :sidebar-items="sidebarItems">
                    <slot name="page-top" #top/>
                    <slot name="page-bottom" #bottom/>
                </Page>
            </transition>
        </div>
        <Footer :class="`footer ${$page.frontmatter.home ? 'home' : 'page'}-footer`"/>
    </div>
</template>

<script>
    import Footer from '@theme/components/Footer.vue'
    import Home from '@theme/components/Home.vue'
    import Navbar from '@theme/components/Navbar.vue'
    import Page from '@theme/components/Page.vue'
    import Sidebar from '@theme/components/Sidebar.vue'
    import PageContent from '@theme/components/PageContent.vue'
    import '../css/theme.css'
    import {
        resolveSidebarItems
    } from '../util'
    import DropdownTransition from "../components/DropdownTransition";

    export default {
        components: {DropdownTransition, Home, Page, Sidebar, Navbar, Footer, PageContent},

        data() {
            return {
                isSidebarOpen: false
            }
        },

        computed: {
            shouldShowNavbar() {
                const {
                    themeConfig
                } = this.$site
                const {
                    frontmatter
                } = this.$page
                if (
                    frontmatter.navbar === false ||
                    themeConfig.navbar === false) {
                    return false
                }
                return (
                    this.$title ||
                    themeConfig.logo ||
                    themeConfig.repo ||
                    themeConfig.nav ||
                    this.$themeLocaleConfig.nav
                )
            },

            shouldShowSidebar() {
                const {
                    frontmatter
                } = this.$page
                return (
                    !frontmatter.home &&
                    frontmatter.sidebar !== false &&
                    this.sidebarItems.length
                )
            },

            sidebarItems() {
                return resolveSidebarItems(
                    this.$page,
                    this.$page.regularPath,
                    this.$site,
                    this.$localePath
                )
            },

            pageClasses() {
                const userPageClass = this.$page.frontmatter.pageClass
                return [{
                    'no-navbar': !this.shouldShowNavbar,
                    'sidebar-open': this.isSidebarOpen,
                    'no-sidebar': !this.shouldShowSidebar,
                },
                    userPageClass
                ]
            }
        },

        mounted() {
            this.$router.afterEach(() => {
                this.isSidebarOpen = false
            });
            const script = document.createElement('script');
            script.src = '//at.alicdn.com/t/font_1559708_kd4aaykz29.js';
            document.body.append(script);
            script.onload = function () {
                console.info("加载 iconfont")
            };

        },

        methods: {
            toggleSidebar(to) {
                this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
                this.$emit('toggle-sidebar', this.isSidebarOpen)
            },

            // side swipe
            onTouchStart(e) {
                this.touchStart = {
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY
                }
            },

            onTouchEnd(e) {
                const dx = e.changedTouches[0].clientX - this.touchStart.x
                const dy = e.changedTouches[0].clientY - this.touchStart.y
                if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
                    if (dx > 0 && this.touchStart.x <= 80) {
                        this.toggleSidebar(true)
                    } else {
                        this.toggleSidebar(false)
                    }
                }
            }
        }
    }
</script>
<style lang="stylus">
    .theme-container
        display flex
        min-height 100vh
        flex-direction column
        justify-content space-between

    @require "../styles/theme"
</style>

