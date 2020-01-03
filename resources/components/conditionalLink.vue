<script>
let externalLink = new RegExp('^https?://|^//')

export default {
    props: ['href'],
    render (h) {
        if(externalLink.test(this.href)) {
            return h('a', { attrs: { href: this.href }}, this.$slots.default)
        }
        return h('router-link', { props: {to: this.href}}, this.$slots.default)
    }
}
</script>
