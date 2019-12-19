<template>
    <header class="app-header">
        <div class="title"><slot name="title"/></div>
    </header>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.app-header
    grid-area header
    display flex

.title
    font-size 20px
    font-weight 500
    display flex
    align-items center
    padding-left 20px
</style>
<script>
export default {
    //this is redundant for now
}
</script>
