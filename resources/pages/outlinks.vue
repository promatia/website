<template>
    <web>
        <template slot="title">Outlinks</template>
        <template slot="content">
            <div class="wrapper">
                <h1>Crawl Outlinks for Search Engine Optimisation</h1>
                <a class="outlink" v-for="outlink in links" :href="outlink.link" :key="outlink.link">{{ outlink.text }}</a>
            </div>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.outlink
    margin 10px
    display block
    background white
    box-shadow 0 2px 5px -2px rgba(0, 0, 0, 0.3)
    padding 10px
    font-size 20px
    border-radius 3px
    max-width 600px
    border-left 4px solid $main

.wrapper
    padding 80px 40px
    max-width: 1000px
    margin: auto

</style>
<script>
import web from '@/layouts/web'

export default {
    setup () {
        return {
            links: [
                {
                    link: 'https://twipu.com/PromatiaGov',
                    text: 'Twitter Profile'
                },
                {
                    link: 'https://promatimes.com',
                    text: 'PromaTimes'
                }
            ]
        }
    },
    components: {
        web
    }
}
</script>
