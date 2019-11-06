<template>
    <minimal>
        <template slot="title">{{ this.$slots.title ? `${ this.$slots.title[0].text } - Promatia | World's Newest Nation`: `Promatia | World's Newest Nation` }}</template>
        <template slot="description"><slot name="description"/></template>
        <template slot="head">
            <slot name="head"/>
        </template>
        <template slot="content">
            <div class="body-container">
                <div class="announcement-bar">
                    Website under construction
                </div>
                <headerComponent/>
                <div class="main-content">
                    <div class="content-wrapper"><slot name="content"/></div>
                    <footerComponent/>
                </div>
            </div>
        </template>
    </minimal>
</template>
<style lang="stylus" scoped>

.body-container
    display flex
    flex-direction column
    flex 1

.main-content
    flex 1
    display flex
    flex-direction column

.content-wrapper
    flex 1

.announcement-bar
    background #992222
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