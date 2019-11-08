<template>
    <web>
        <template slot="title">Page not found</template>
        <template slot="content">
            <div class="wrapper">
                <div class="subtitle">
                    Oops
                </div>
                <h1 class="big-text">
                    Page not found
                </h1>
                <p>
                    Our website is still under construction and we will be rolling out more pages in the coming weeks
                </p>
            </div>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
.subtitle
    font-weight 500
    font-size 1.2em
.big-text
    margin 0

.wrapper
    padding 80px 40px

</style>
<script>
import web from "@/layouts/web"

export default {
    async serverPrefetch(){
        this.$ssrContext.ctx.status = 404
    },
    components: {
        web
    }
}
</script>