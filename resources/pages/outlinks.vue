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
                },
                {
                    link: 'https://www.google.com/maps/d/u/0/viewer?mid=10cHozI1kTV7NdduIaFhiMlXWwwh1YUW2&hl=en&ll=-15.7567357%2C135.85530719999997&z=16',
                    text: 'Promatia Map'
                },
                {
                    link: 'https://ello.co/dominusvilicus',
                    text: 'Ello DominusVilicus Promatia'
                },
                {
                    link: 'http://s220058662.websitehome.co.uk/profile.php?pid=5e294e3bc1ddd6.58731113',
                    text: 'Promatia Location'
                },
                {
                    link: 'https://aimware.net/forum/user-305608.html',
                    text: 'Aimware Forum'
                },
                {
                    link: 'https://www.wikidata.org/wiki/Q83752609',
                    text: 'Promatia Data'
                }
            ]
        }
    },
    components: {
        web
    }
}
</script>
