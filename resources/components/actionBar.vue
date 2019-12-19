<template>
    <div class="action-container-wrapper">
        <div class="action-bar"
            :class="[message.type]"
            v-for="message in messages"
            :key="message.id"
            @click="remove(message.id)"
            :ref="'message' + message.id">
            <div class="icon">
                <Info v-if="message.type === 'info'"/>
                <Alert v-if="['warning', 'error'].includes(message.type)"/>
                <CheckCircle v-if="message.type === 'success'"/>
            </div>
            <div class="text">
                {{ message.text }} 
            </div>
            <Close/>
        </div>
    </div>
</template>
<script>
import { computed, watch, onMounted } from '@vue/composition-api'
import Close from 'icons/Close'
import Info from 'icons/AlertCircle'
import Alert from 'icons/Alert'
import CheckCircle from 'icons/CheckCircle'

export default {
    components: {
        Close,
        Alert,
        Info,
        CheckCircle
    },
    setup (props, { refs, isServer, root }) {
        let interval = null
        
        function intervalFn () {
            $state.messages.shift()
            if(!isServer) root.$nextTick(setBottomHeights)
        }

        watch(()=>{
            if($state.messages.length === 0) {
                clearInterval(interval)
                interval = null
            }
            if($state.messages.length !== 0) {
                if(!isServer) root.$nextTick(setBottomHeights)
                if(interval == null) interval = setInterval(intervalFn, 3000)
            }
        })

        const messages = computed(()=> $state.messages.slice(0, 4).reverse())

        onMounted(setBottomHeights)

        function setBottomHeights () {
            let elms = messages.value.map(message => refs[`message${message.id}`][0]).reverse()

            let heights = 0
            let margin = 10

            for(let i in elms) {
                let el = elms[i]
                let elHeight = el.offsetHeight
                heights += margin
                el.style.bottom = heights + 'px'
                heights += elHeight
            }
        }

        return {
            messages,
            remove (id) {
                $state.messages = $state.messages.filter(val => val.id !== id)
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.action-container-wrapper
    position fixed
    bottom 0
    left 0
    right 0
    height 0
    display flex
    align-items flex-end
    justify-content center
    .action-bar
        cursor pointer
        background #47a
        position fixed
        width 100%
        max-width 500px
        padding 8px
        font-weight 500
        box-shadow 0 0 5px rgba(0,0,0,0.1)
        border-radius 5px
        z-index 60
        color white
        transition 0.2s ease-in-out
        display grid
        grid-template-columns min-content 1fr min-content
        align-items center
        &.warning
            background #b8992a
        &.error
            background #b44
        &.success
            background #4a6
        .icon
            padding-right 8px
            
</style>
