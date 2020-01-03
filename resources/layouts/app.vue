<template>
    <appminimal>
        <template slot="title"><slot name="title"/></template>
        <template slot="head"><slot name="head"/></template>
        <template slot="description"><slot name="description"/></template>
        <template slot="content">
            <div class="app-wrapper">
                <appheader>
                    <template slot="title"><slot name="title"/></template>
                </appheader>
                <appsidebar/>
                <div class="content-frontdrop">
                    <slot name="content"/>
                </div>
            </div>
        </template>
    </appminimal>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.app-wrapper
    display grid
    grid-template-columns 300px 1fr
    grid-template-rows 60px 1fr
    grid-template-areas "sidebar header" "sidebar content"
    background rgba(0,0,0,0.5)
    flex 1

.content-frontdrop
    border-top-left-radius 15px
    border-top-right-radius 15px
    background $darkbackground
    grid-area content

</style>
<script>
import appminimal from '@/layouts/appminimal'
import appheader from '@/includes/appheader'
import appsidebar from '@/includes/appsidebar'

export default {
    components: {
        appminimal,
        appheader,
        appsidebar
    }
}
</script>
