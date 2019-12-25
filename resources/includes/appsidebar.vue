<template>
    <div class="sidebar-area">
        <div class="branding">
            myPro
        </div>
        <nav class="sidebar">
            <div class="links">
                <router-link
                    class="link"
                    v-for="(link, index) in links"
                    :key="index"
                    :to="link.link">
                    <component :is="link.icon"/>
                    <div class="link-text">{{ link.name }}</div>
                </router-link>
            </div>
        </nav>
    </div>
</template>
<style lang="stylus" scoped>
@import '~@/stylus/variables'

.sidebar-area 
    grid-area sidebar
    display grid 
    grid-template-rows 60px 1fr
    .branding
        font-size 32px
        font-weight 500
        padding-left 15px
        display flex
        align-items center

.links
    display grid
    grid-gap 10px
    padding 0 10px

.link
    display grid
    grid-template-columns max-content 1fr
    padding 8px
    border-radius 10px
    font-size 20px
    grid-gap 10px
    color rgba(255,255,255,0.75)
    .link-text
        display flex
        align-items center
    &.router-link-active, &:hover
        color rgba(255,255,255,1)
    &:hover

        background $darkbackground

</style>
<script>
import Home from 'icons/Home'
import Discord from 'icons/Discord'

export default {
    setup () {
        return {
            links: [
                {
                    name: 'Dashboard',
                    link: '/app',
                    icon: Home
                },
                {
                    name: 'Discord Server',
                    link: 'https://discord.com',
                    icon: Discord
                }
            ]
        }
    }
}
</script>
