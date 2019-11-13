<template>
    <footer>
        <div class="footer-item top-footer">
            <div class="inner-footer footer-grid">
                <div class="grid-item">
                    <div class="footer-title">About Promatia</div>
                    <p>
                        Promatia is a new country project located in North Australia.
                    </p>
                    <p>
                        Our goal is to establish a technologically innovate, environmentally sustainable nation and democratic nation.
                    </p>
                    <p>
                        <router-link to="/information">Learn More</router-link>
                    </p>
                </div>
                <div class="grid-item">
                    <div class="footer-title">Quick Links</div>
                    <div class="links">
                        <div class="link-group">
                            <a class="footer-link" v-for="link in links" :key="link.text" :href="link.href">{{ link.text }}</a>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="footer-title">Signup to our newsletter</div>
                    <p>Sign up to Promatia’s newsletter and get updated when we launch our user system</p>
                </div>
                <div class="grid-item">
                    <div class="footer-title">Become A Citizen</div>
                    <p>
                        Become a citizen of Promatia today!
                    </p>
                    <p>
                        Gain the 50 Proma (Promatia’s currency) by signing up today 
                    </p>
                    <p>
                        <buttonInput text="Start" href="/start"/>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-item social-footer">
            <div class="inner-footer flex justify-center">
                <a href="mailto:gov@promatia.com"><Email :size="32"/></a>
                <a href="https://dev.to/promatia"><DevTo :size="32"/></a>
                <a href="https://www.twitch.tv/promatiagov"><Twitch :size="32"/></a>
                <a href="https://www.reddit.com/r/Promatia/"><Reddit :size="32"/></a>
                <a href="https://www.youtube.com/channel/UCL8Fjjq-gSzWMbAC3sEOXpA"><Youtube :size="32"/></a>
                <a href="https://discord.gg/APzGzGg"><Discord :size="32"/></a>
                <a href="http://m.me/promatiagov"><FacebookMessenger :size="32"/></a>
                <a href="https://www.facebook.com/promatiagov"><Facebook :size="32"/></a>
                <a href="https://twitter.com/PromatiaGov"><Twitter :size="32"/></a>
                <a href="https://www.instagram.com/promatiagov/"><Instagram :size="32"/></a>
            </div>
        </div>
        <div class="footer-item bottom-footer">
            <div class="inner-footer">
                <a class="government-text" href="/">
                    <img class="pentark" :src="pentark" alt="Promatia Pentark">
                    <div class="government">
                        Government of Promatia
                    </div>
                    <div class="motto">
                        The Modern Solution To Governance
                    </div>
                </a>
            </div>
        </div>
    </footer>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.footer-item
    padding 0 20px

.inner-footer
    padding 35px 0
    max-width 1200px
    width 100%
    margin auto
    color #ffffffbb

.footer-title
    color #ffffff77
    font-weight 500

.footer-grid
    display grid 
    grid-template-columns 1fr 0.5fr 1.5fr 1fr
    grid-gap 30px
    @media (max-width 800px)
        grid-template-columns 1fr 1fr
    @media (max-width 500px)
        grid-template-columns 1fr

a
    color #ffffffdd

.links
    padding-top 5px

.footer-link
    display block
    padding 5px 0

.social-footer
    background mix(#0d0d0d, $main, 95%)
    border-top 1px solid #ffffff18
    padding 0 20px
    display flex
    .inner-footer
        flex-wrap wrap
    a
        padding 5px

.top-footer
    background mix(#0d0d0d, $main, 95%)
    padding 40px 20px

.bottom-footer
    background mix(#181818, $main, 95%)
    .government-text
        display block
        text-align center
        color #ffffffaa
        font-weight 400
    .government
        font-size 1.3em
        padding 5px 0
    .motto
        font-style italic
        font-size 14px

.pentark
    max-height 50px
    display inline-block

</style>
<script>
import { reactive } from "vue"
import pentark from "@/images/pentark.png"
import buttonInput from "@/components/buttonInput"
import axios from 'axios'

/**
 * Social Icons
 */
import Email from "icons/Email"
import DevTo from "icons/DevTo"
import Twitch from "icons/Twitch"
import Reddit from "icons/Reddit"
import Youtube from "icons/Youtube"
import Discord from "icons/Discord"
import FacebookMessenger from "icons/FacebookMessenger"
import Facebook from "icons/Facebook"
import Twitter from "icons/Twitter"
import Instagram from "icons/Instagram"

export default {
    setup(){
        return {
            pentark,
            links: [
                {
                    text: 'Home',
                    href: '/'
                },
                {
                    text: 'Information',
                    href: '/information'
                },
                {
                    text: 'Proma Times',
                    href: 'https://promatimes.com'
                },
                {
                    text: 'Media',
                    href: '/information/media'
                },
                {
                    text: 'Services',
                    href: '/information/services'
                },
                {
                    text: 'myPro',
                    href: '/app'
                },
                {
                    text: 'Login',
                    href: '/login'
                }
            ]
        }
    },
    components: {
        buttonInput,
        Email,
        DevTo,
        Twitch,
        Reddit,
        Youtube,
        Discord,
        FacebookMessenger,
        Facebook,
        Twitter,
        Instagram,
    }
}
</script>