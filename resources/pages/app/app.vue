<template>
    <app>
        <template slot="head"><slot name="head"/></template>
        <template slot="content">
            test
        </template>
    </app>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

</style>
<script>
import app from '@/layouts/app'

export default {
    components: {
        app
    }
}
</script>
