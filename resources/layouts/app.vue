<template>
    <appminimal>
        <template slot="title"><slot name="title"/></template>
        <template slot="head"><slot name="head"/></template>
        <template slot="content">
            <slot name="content"/>
        </template>
    </appminimal>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

</style>
<script>
import appminimal from "@/layouts/appminimal"

export default {
    components: {
        appminimal
    }
}
</script>