<template>
    <web>
        <template slot="title">Get Started</template>
        <template slot="description">Promatia is a new developing nation-state which is in the process of establishing a new and autonomous government, city, community, country, society and nation. Promatia is on-track to becoming a self-sufficient, sustainable and independent nation.</template>
        <template slot="head">
            
        </template>
        <template slot="content">
            <div class="hero-header">
                <div class="content">
                    <h1>Get Started</h1>
                    <div class="subtitle">
                        Ready to start creating?
                    </div>
                </div>
                <div class="header-bg"/>
            </div>
            <hero class="hero">
                <div class="padding-small">
                    <div class="step-block-container">
                        <a
                            class="step-block"
                            tabindex="0"
                            v-for="(link, index) in links"
                            :key="index"
                            :class="{disabled: link.disabled}"
                            :href="link.href">
                            <div class="step-number">{{ index + 1 }}</div>
                            <div class="step-content">
                                <h2>{{ link.title }}</h2>
                                <span>{{ link.text }}</span>
                            </div>
                            <div class="step-chevron">
                                <ChevronRight :size="60"/>
                            </div>
                        </a>
                    </div>
                </div>
            </hero>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.hero-header
    padding 130px 20px
    position relative
    overflow hidden
    color white
    h1
        font-weight 500
        font-size 3.2em
        margin-top 0
        margin-bottom 10px
    .subtitle
        font-size 1.5em
    .content
        max-width $tabletWidth
        margin auto
        position relative
        z-index 1

.step-block-container
    max-width 750px
    margin auto 
    display grid 
    grid-gap 20px

.step-block
    background mix(#fff, mix($main, #121212, 8%), 8%)
    color white
    cursor pointer
    padding 25px
    display grid
    border-radius 10px
    grid-gap 25px
    grid-template-columns max-content 1fr max-content
    box-shadow 0
    outline 0
    position relative
    &.disabled
        opacity 0.5
        cursor default
    .step-number
        align-self center
        display flex
        justify-content center
        align-items center
        font-size 3em
        font-weight 500
        background rgba(0,0,0,0.3)
        height 80px
        width 80px
        border-radius 50px
    .step-content
        align-self center
        h2
            margin 0
            font-size 26px
            margin-bottom 5px
        span
            font-size 18px
            font-weight 400
    .step-chevron
        align-self center
    &:hover, &:active, &:focus
        &:not(.disabled)
            background mix(#fff, mix($main, #121212, 8%), 12%)

.header-bg
    position absolute
    top 0
    bottom 0
    right 0
    left 0
    width 100%
    height 100%
    background-image linear-gradient(70deg, #259BCE, #03539D)
    transform skewY(-6deg)
    transform-origin top left
</style>




<script>
import web from '@/layouts/web'
import hero from '@/components/hero'
import { onMounted } from '@vue/composition-api'
import { setCookie, getQuery } from '@/utils/utils'
import ChevronRight from 'icons/ChevronRight'

export default {
    components: {
        web,
        hero,
        ChevronRight
    },
    setup (props, { }) {
        let links = [
            {
                title: 'Register your account',
                text: 'Sign up on myPro so you can access government services & apply for citizenship',
                href: '/sign-up'
            },
            {
                title: 'Join the Discord',
                text: 'Join our discord if you’re interested in helping out during early stages of our government.',
                href: 'https://discord.gg/frVSDck'
            },
            {
                title: 'Enable notifications',
                text: 'Enable notifications and be the first to hear about progress and updates',
                disabled: true
            },
            {
                title: 'Refer your friends',
                text: 'Refer your friends and earn 50 Proma for every user that becomes a citizen.',
                disabled: true
            },
            {
                title: 'Become a citizen',
                text: 'Sign up on myPro so you can access government services & apply for citizenship',
                disabled: true
            },
            {
                title: 'Register a bank account',
                text: 'Get a bank account - PromaBank release date estimated around March 2020.',
                disabled: true
            }
        ]

        onMounted(()=>{
            if(getQuery('referrer')) setCookie('referrer', getQuery('referrer'))
        })

        return {
            links
        }
    }
}
</script>
