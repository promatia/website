<style lang="stylus" scoped>
@import '~@/stylus/variables'

.button
    display inline-flex
    align-items center
    background mix(#000, $main, 10%)
    color white
    padding 8px 14px
    font-weight 500
    border-radius 5px
    font-size 18px
    cursor pointer
    position relative
    text-decoration none
    &:focus, &:hover, &:active
        outline 0
        background mix(white, $main, 10%)


</style>
<script>
export default {
    props: ['to', 'text'],
    render (h) {
        const props = this.$props
        const attrs = { tabindex: 0, ...this.$attrs }
        const content = props.text ? [props.text] : this.$slots.default

        if(props.to) {
            return h('router-link', { on: this.$listeners, attrs, props: {to: props.to}}, content)
        }

        return h('a', {on: this.$listeners, attrs}, content)
    }
}
</script>