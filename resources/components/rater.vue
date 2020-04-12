<template>
    <div class="rating-header">
        <div class="ratingcard">
            <template v-if="!rating">
                <div class="starwrapper">Did you find this page helpful?</div>
                <div class="starwrapper"><component v-for="(star, index) in stars" :key="index" :is="star" @mouseover="hover=index+1" @mouseleave="hover=null" @click="rating=index+1"/></div>
            </template>
            <template v-else>
                <div class="starwrapper">Thank you! We will take your rating into consideration.</div>
            </template>
        </div>
    </div>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.rating-header
    background #03539D
    padding 40px 10px
    position relative
    overflow hidden
    color white
    h1
        font-weight 500
        font-size 3.2em
        margin-top 0
        margin-bottom 10px
    hr
        border 3px solid #01294D
        border-radius 3px
        margin-bottom 15px
    .subtitle
        font-size 1.2em
        font-weight 400
    .ratingcard
        text-align center
        display flex
        justify-content center
        flex-direction column
        font-weight 600
        color $text
        max-width 400px
        padding 20px 40px
        background #ffffff
        margin auto
        position relative
        z-index 1
        border-radius 5px
    .starwrapper
        display flex
        justify-content center
    .material-design-icon
        color #3C7CBC
</style>
<script>
import { ref, computed } from '@vue/composition-api'
import Star from 'icons/Star'
import StarOutline from 'icons/StarOutline'

export default {
    setup() {
        let rating = ref(null) // rating value
        let hover = ref(null) // index of item being hovered + 1

        function repeat(times, component){
            return Array(times).fill(component)
        }
    
        return {
            hover,
            rating,
            stars: computed(()=>{
                if(!hover.value) return repeat(5, StarOutline)
                return [...repeat(hover.value, Star),...repeat(5 - hover.value, StarOutline)]
            })
        }
    }
}
</script>
