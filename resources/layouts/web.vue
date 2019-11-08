<template>
    <minimal>
        <template slot="title">{{ this.$slots.title ? `${ this.$slots.title[0].text } - Promatia | World's Newest Nation`: `Promatia | World's Newest Nation` }}</template>
        <template slot="description"><slot name="description"/></template>
        <template slot="head">
            <slot name="head"/>
        </template>
        <template slot="content">
            <div class="announcement-bar">Website under construction</div>
            <headerComponent/>
            <div class="content-wrapper"><slot name="content"/></div>
            <footerComponent/>
        </template>
    </minimal>
</template>
<style lang="stylus" scoped>

.content-wrapper
    flex 1

.announcement-bar
    background #882222
    color white
    font-size 17px
    font-weight 500
    padding 5px
    text-align center

</style>
<script>
import minimal from "@/layouts/minimal"
import headerComponent from "@/includes/header"
import footerComponent from "@/includes/footer"

export default {
    components: {
        minimal,
        headerComponent,
        footerComponent
    }
}
</script>