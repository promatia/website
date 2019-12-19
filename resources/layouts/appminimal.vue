<template>
    <minimal>
        <template slot="title">{{ this.$slots.title ? `${ this.$slots.title[0].text } - myPro`: `myPro` }}</template>
        <template slot="description"><slot name="description"/></template>
        <template slot="head"><slot name="head"/></template>
        <template slot="content">
            <div class="app-minimal"><slot name="content"/></div>
        </template>
    </minimal>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.app-minimal
    background $darkbackground
    color white
    flex 1
    display flex

</style>
<script>
import minimal from '@/layouts/minimal'

export default {
    components: {
        minimal
    }
}
</script>
