<template>
    <app>
        <template slot="head"><slot name="head"/></template>
        <template slot="title">Dashboard</template>
        <template slot="content">
            <div class="welcome">
                Welcome {{ $state.user.firstName }}!
            </div>
        </template>
    </app>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.welcome
    padding 20px
    font-size 2.5em
    font-weight 300
    text-align center

</style>
<script>
import app from '@/layouts/app'

export default {
    components: {
        app
    }
}
</script>
