<template>
    <header>
        <div class="inner-header">
            <a class="logo-wrapper" href="/">
                <img class="logo" :src="logo" alt="Promatia Logo">
            </a>
            <div class="right-header">
                <div class="top">
                    <buttonInput href="/start" text="Start"/>
                </div>
                <div class="bottom">
                    <template v-for="link in links" >
                        <a v-if="RegExp('^https?://|^//').test(link.href)" :href="link.href" class="menu-item" :key="link.text">
                            {{ link.text }}
                        </a>
                        <router-link v-else :to="link.href" :key="link.text" class="menu-item">
                            {{ link.text }}
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

$headerBackground = mix($main, #040404, 13%)

header
    background $headerBackground
    position sticky
    top 0
    color white
    padding 0 15px

.inner-header
    max-width 1000px
    width 100%
    margin auto
    display flex
    height 90px
    align-items center

.logo-wrapper
    height 100%
    display flex
    align-items center

.logo
    max-height 50px
    display block

.right-header
    margin-left auto
    display flex
    flex-direction column
    height 100%

.top
    padding-top 10px
    text-align right
    flex 1

.bottom
    flex 1
    display flex
    align-items flex-end

.menu-item
    display block
    padding 10px 12px
    text-decoration none 
    color white
    font-size 17px
    font-weight 500
    &:hover
        background #ffffff1a
        border-top-left-radius 5px
        border-top-right-radius 5px

</style>
<script>
import { reactive } from "vue"
import logo from "@/images/logo.png"
import buttonInput from "@/components/buttonInput"

export default {
    setup(){
        return {
            logo,
            links: [
                {
                    text: "Home",
                    href: "/"
                },
                {
                    text: "Information",
                    href: "/information"
                },
                {
                    text: "Services",
                    href: "/information/services"
                },
                {
                    text: "News",
                    href: "https://promatimes.com"
                },
                {
                    text: "Shop",
                    href: "/shop"
                }
            ]
        }
    },
    components: {
        buttonInput
    }
}
</script>