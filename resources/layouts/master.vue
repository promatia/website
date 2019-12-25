<template>
    <servue>
        <template slot="head">
            <link rel="preconnect" href="https://www.google-analytics.com">
            <!-- Google Tag Manager -->
            <script type="application/javascript">(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MMR2SJV');</script>
            <!-- End Google Tag Manager -->
            
            <slot name="head"/>
        </template>
        <template slot="body"><slot name="body"/></template>
    </servue>
</template>
<style lang="stylus">
@import "~@/stylus/normalise"

html, body, #app
    display flex
    min-height 100%
    flex 1
    flex-direction column

h1, h2, h3, h4, h5, h6
    font-weight 500

</style>
<script>
import servue from '@/utils/servue'

export default {
    created () {
        if(this.$isServer) {
            this.$ssrContext.htmlattrs = 'lang="en-AU"'
        }
    },
    components: {
        servue
    }
}
</script>
