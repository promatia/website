<template>
    <minimal>
        <template slot="title">{{ this.$slots.title ? `${ this.$slots.title[0].text } - Promatia`: `Promatia | World's Newest Nation` }}</template>
        <template slot="description"><slot name="description"/></template>
        <template slot="head">
            <slot name="head"/>
        </template>
        <template slot="content">
            <div class="announcement-bar"><div class="boxbar">CORONAVIRUS WARNING, <u><router-link to="/information/coronavirus">VISIT CORONAVIRUS HUB PAGE</router-link></u></div></div>
            <headerComponent/>
            <div class="content-wrapper"><slot name="content"/></div>
            <footerComponent/>
        </template>
    </minimal>
</template>
<style lang="stylus" scoped>

a
    font-family 'Fira Sans', sans-serif
    font-weight bold
    color #ffffff

.content-wrapper
    flex 1

.announcement-bar
    background repeating-linear-gradient(-45deg,#000000,#000000 10px,#ffcc00 10px,#ffcc00 20px)
    color #ffffff
    font-size 17px
    font-weight 500
    text-align center
    display flex
    padding 3px
    justify-content center

.boxbar
    background-color #000000
    padding 3px

</style>
<script>
import minimal from '@/layouts/minimal'
import headerComponent from '@/includes/header'
import footerComponent from '@/includes/footer'

export default {
    components: {
        minimal,
        headerComponent,
        footerComponent
    }
}
</script>
