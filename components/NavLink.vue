<template>
    <router-link v-if="!isExternal(link) && item.route !== false"
    class="nav-link" :to="link"
     @focusout.native="focusoutAction"
     :exact="exact">
        <vp-icon :name="icon.name" v-if="icon && icon.name"
        :color="icon.color" :size="icon.size"/>
        {{ item.text }}
    </router-link>
    <a v-else :href="link" @focusout="focusoutAction" class="nav-link external"
       :target="isMailto(link) || isTel(link) ? null : '_blank'"
       :rel="isMailto(link) || isTel(link) ? null : 'noopener noreferrer'">
        <vp-icon :name="icon.name" v-if="icon && icon.name"
                 :color="icon.color" :size="icon.size"/>
        {{ item.text }}
        <OutboundLink/>
    </a>
</template>

<script>
    import {isExternal, isMailto, isTel, ensureExt} from '../util'
    export default {
        props: {
            item: {
                required: true
            }
        },

        computed: {
            link() {
                return ensureExt(this.item.link)
            },
            icon() {
                if (this.item.icon) {
                    if (typeof this.item.icon === 'string') {
                        return {
                            name: this.item.icon
                        };
                    } else if (typeof this.item.icon === 'object' && this.item.icon.name) {
                        return this.item.icon;
                    }
                }
                return null;
            },
            exact() {
                if (this.$site.locales) {
                    return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
                }
                return this.link === '/'
            }
        },

        methods: {
            isExternal,
            isMailto,
            isTel,
            focusoutAction() {
                this.$emit('focusout')
            }
        }
    }
</script>
