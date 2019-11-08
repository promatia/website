<template>
    <div class="wrapper" :style="{ width: width }">
        <span ref="text" class="switcher"></span>
    </div>
</template>
<style lang="stylus" scoped>
.wrapper
    transition width 350ms ease-in-out
    width 0px
    display inline-flex
    overflow hidden

.switcher
    background white
    color black
    padding 0 6px
    display block
    word-wrap none
    display inline-block
    white-space nowrap
    word-wrap none
</style>
<script>

export default {
    props: ['items'],
    data(){
        return {
            index: 0,
            width: '0px'
        }
    },
    methods: {
        async enlarge(){
            if(this.index + 1 > this.items.length) this.index = 0

            if(this.$refs.text){
                this.$refs.text.textContent = this.items[this.index++]
                this.width = this.$refs.text.getBoundingClientRect().width + 'px'
            }
        },
        async shrink(){
            await new Promise(resolve => setTimeout(resolve, 2500))
            this.width = '0px'
            await new Promise(resolve => setTimeout(resolve, 350))
        }
    },
    async mounted(){
        await this.enlarge()

        while (true) {
            await this.shrink()
            await this.enlarge()
        }
    }
}
</script>