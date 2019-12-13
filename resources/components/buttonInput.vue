<template>
    <div class="button-input-wrapper">
        <router-link v-if="to" class="button" :to="to">
            {{ text }}<slot/>
        </router-link>
        <a v-else :href="href" class="button">
            {{ text }}<slot/>
        </a>
    </div>
</template>
<style lang="stylus" scoped>
@import '~@/stylus/variables'

.button-input-wrapper
    display inline-flex

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
    props: ['href', 'to', 'text']
}
</script>