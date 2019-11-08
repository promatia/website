<template>
    <router-link class="button" :to="href">
        {{ text }}<slot/>
    </router-link>
</template>
<style lang="stylus" scoped>
@import '~@/stylus/variables'

.button
    display inline-block
    background mix(#000, $main, 10%)
    color white
    padding 8px 14px
    font-weight 500
    border-radius 5px
    font-size 18px
    cursor pointer
    text-decoration none
    &:focus, &:hover
        outline 0
        background mix(#fff, $main, 10%)

</style>
<script>
export default {
    props: ['href', 'text']
}
</script>