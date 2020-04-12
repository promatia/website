<template>
    <header>
        <div class="inner-header">
            <router-link class="logo-wrapper" to="/">
                <img class="logo" :src="logo" alt="Promatia Logo">
            </router-link>
            <div class="right-header">
                <div class="actions">
                    <div class="sub-actions">
                        <buttonInput class="button" to="/start" text="Start"/>
                        <buttonInput class="button" to="/sign-in" text="Sign In"/>
                    </div>
                    <a v-if="false" class="menu-icon" @click="menuOpened = !menuOpened">
                        <MenuIcon :size="30"/>
                    </a>
                </div>
                <!--
                <div class="nav-container" :class="{ menuOpened }">
                    <nav>
                        <template v-for="link in links" >
                            <a v-if="RegExp('^https?://|^//').test(link.href)" :href="link.href" class="menu-item" :key="link.text">
                                {{ link.text }}
                            </a>
                            <router-link v-else :to="link.href" :key="link.text" class="menu-item">
                                {{ link.text }}
                            </router-link>
                        </template>
                    </nav>
                </div>
                -->
            </div>
        </div>
    </header>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

$headerBackground = mix($main, #f8f8f8, 0%)

header
    background $headerBackground
    position sticky
    top 0
    color white
    z-index 20

.inner-header
    max-width 1300px
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
    padding-left 10px
    @media (max-width $phoneWidth)
        max-height 35px

.right-header
    margin-left auto
    display flex
    flex-direction column
    height 100%

.actions
    text-align right
    align-items center
    display grid
    margin-left auto
    grid-gap 5px
    grid-auto-flow column
    flex 1
    .sub-actions
        display grid 
        grid-auto-flow column
        grid-gap 5px
        text-align center
        @media (max-width $phoneWidth)
            grid-auto-flow column
            align-items center
            justify-self center

.menu-icon
    display none
    padding 5px
    color white
    cursor pointer
    @media (max-width $tabletWidth)
        display flex

.nav-container
    flex 1
    display flex
    nav
        display flex
        align-items flex-end
    @media (max-width $tabletWidth)
        display none
        &.menuOpened
            display flex
            position absolute
            bottom 0
            left 0
            right 0
            justify-content center
            nav
                background mix($headerBackground, #fff, 90%)
                border-bottom-left-radius 5px
                max-width 400px
                position absolute
                z-index 25
                box-shadow 0 0 5px rgba(0,0,0,0.3)
                width 100%
                right 0
                flex-direction column
                overflow hidden
                .menu-item
                    width 100%
                    text-align center
                    &:hover
                        border-radius 0

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
import logo from '@/images/logo.png'
import buttonInput from '@/components/buttonInput'
import MenuIcon from 'icons/Menu'

export default {
    setup () {
        return {
            menuOpened: false,
            logo,
            links: [
                {
                    text: 'Home',
                    href: '/'
                },
                {
                    text: 'Information',
                    href: '/information'
                },
                {
                    text: 'Services',
                    href: '/information/services'
                },
                {
                    text: 'News',
                    href: 'https://promatimes.com'
                },
                {
                    text: 'Shop',
                    href: '/shop'
                },
                {
                    text: 'Discord',
                    href: 'https://discord.gg/U6Dq8XC'
                }
            ]
        }
    },
    components: {
        buttonInput,
        MenuIcon
    }
}

</script>
