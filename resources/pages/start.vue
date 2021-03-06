<template>
    <web>
        <template slot="title">Get Started</template>
        <template slot="description">Promatia is a new developing nation-state which is in the process of establishing a new and autonomous government, city, community, country, society and nation. Promatia is on-track to becoming a self-sufficient, sustainable and independent nation.</template>
        <template slot="head">
            
        </template>
        <template slot="content">
            <div itemscope itemtype="http://schema.org/HowTo">
                <div class="hero-header">
                    <div class="content">
                        <h1 itemprop="name">Get Started</h1>
                        <div class="subtitle" itemprop="description">
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
                                :href="link.href"
                                itemprop="step" itemscope
                                itemtype="http://schema.org/HowToStep"
                                >
                                <div class="step-number">{{ index + 1 }}</div>
                                <div class="step-content">
                                    <h2 itemprop="name">{{ link.title }}</h2>
                                    <span itemprop="text">{{ link.text }}</span>
                                </div>
                                <div class="step-chevron">
                                    <ChevronRight :size="50"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </hero>
            </div>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.hero-header
    padding 140px 20px
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
    @media (max-width $tabletWidth)
        grid-gap 10px

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
    @media (max-width $tabletWidth)
        padding 15px
        grid-gap 15px
        .step-number
            height 50px
            width 50px
            font-size 2em
        .step-content
            h2
                font-size 20px
            span 
                font-size 15px

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
    setup () {
        let links = [
            {
                title: 'Register Your Account',
                text: 'Sign up on myPro so you can access government services & apply for citizenship.',
                href: '/sign-up'
            },
            {
                title: 'Join the Discord',
                text: 'Join our discord server if you’re interested in helping out during early stages of our government.',
                href: 'https://discord.gg/U6Dq8XC'
            },
            {
                title: 'Enable Notifications',
                text: 'Enable notifications, and be the first to hear about our progress and receive updates.',
                disabled: true
            },
            {
                title: 'Refer Your Friends',
                text: 'Refer your friends, and earn 50 Proma for every user that becomes a citizen.',
                disabled: true
            },
            {
                title: 'Become a Citizen',
                text: 'Finalize your citizenship on myPro so you take part in lawmaking, and electing government leaders.',
                disabled: true
            },
            {
                title: 'Register a PromaBank Account',
                text: 'PromaBank release date estimated March of 2020.',
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
