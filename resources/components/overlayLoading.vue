<template>
    <div class="overlay-spinner">
        <loading/>
    </div>
</template>
<script>
import loading from '@/components/loading'

export default {
    components: {
        loading
    }
}
</script>
<style lang="stylus" scoped>

.overlay-spinner
    display flex
    background rgba(0,0,0,0.2)
    justify-content center
    align-items center
    position absolute
    top 0
    bottom 0
    right 0
    left 0
    z-index 20

</style>
