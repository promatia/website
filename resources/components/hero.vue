<template>
    <div class="hero" :style=heroImage>
        <slot/>
    </div>
</template>
<script>
import { computed } from '@vue/composition-api'

export default {
    props: ['img'],
    setup(props){
        return {
            heroImage: computed(() => {
                if(!props.img) return {}
                return {
                    "background-image": `url('${props.img}')`
                }
            })
        }
    },
}
</script>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.hero
    background transparent
    &.image
        background #222
        color white
        background-position center
        background-repeat no-repeat
        background-size cover
    &.dark
        background mix($main, #000, 10%)
        color white
    .inner-hero
        margin auto 
        max-width 1200px
        width 100%
        &.page
            background white
            box-shadow 0 0 4px 0 rgba(0,0,0,0.25)
            padding 20px 50px
            @media (max-width: 1200px)
                padding 20px 40px
            @media (max-width: 800px)
                padding 10px
        &.larger-text
            font-size: 1.2em
            @media (max-width: 800px)
                font-size: 1.1em
    &.full
        height calc(100vh - 90px)
&.padding-10
    padding 10px
&.padding-20
    padding 20px
&.padding-40
    padding 40px 10px
&.padding-small
    padding 5vh 10px
&.padding-medium
    padding 10vh 10px
&.padding-large
    padding 15vh 10px
&.padding-huge
    padding 26vh 10px
</style>

