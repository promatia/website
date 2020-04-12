<template>
    <footer>
        <div class="footer-item top-footer">
            <div class="inner-footer footer-grid">
                <div class="grid-item">
                    <div class="footer-title">About Promatia</div>
                    <p>
                        Promatia is a new country project located on the Australian continent bordering the Gulf of Carpentaria.
                    </p>
                    <p>
                        Our goal is to establish a technologically innovative, environmentally sustainable, and democratic nation.
                    </p>
                    <p>
                        <router-link to="/information">Learn About Our Government</router-link>
                    </p>
                </div>
                <div class="grid-item">
                    <div class="footer-title">Quick Links</div>
                    <div class="links">
                        <div class="link-group" v-for="(linkGroup, index) in links" :key="index">
                            <a class="footer-link" v-for="link in linkGroup" :key="link.text" :href="link.href">{{ link.text }}</a>
                        </div>
                    </div>
                </div>
                <div class="grid-item">
                    <div class="footer-title">Start Creating!</div>
                    <p>
                        Become a citizen of Promatia today!
                    </p>
                    <p>
                        Gain 50Ⱀ, by signing up today. Promatia's fully digital currency.
                    </p>
                    <p>
                        <buttonInput class="button" to="/start"><ChevronIcon/>Become A Citizen</buttonInput>
                    </p>
                </div>
            </div>
        </div>
        <div class="footer-item social-footer">
            <div class="inner-footer flex justify-center">
                <a title="Email" href="mailto:gov@promatia.com"><Email :size="32"/></a>
                <a title="Dev.to" href="https://dev.to/promatia"><DevTo :size="32"/></a>
                <a title="Twitch" href="https://www.twitch.tv/promatiagov"><Twitch :size="32"/></a>
                <a title="Reddit" href="https://www.reddit.com/r/Promatia/"><Reddit :size="32"/></a>
                <a title="Youtube" href="https://www.youtube.com/channel/UCL8Fjjq-gSzWMbAC3sEOXpA"><Youtube :size="32"/></a>
                <a title="Discord" href="https://discord.gg/U6Dq8XC"><Discord :size="32"/></a>
                <a title="Messenger" href="http://m.me/promatiagov"><FacebookMessenger :size="32"/></a>
                <a title="Facebook" href="https://www.facebook.com/promatiagov"><Facebook :size="32"/></a>
                <a title="Twitter" href="https://twitter.com/PromatiaGov"><Twitter :size="32"/></a>
                <a title="Instagram" href="https://www.instagram.com/promatiagov/"><Instagram :size="32"/></a>
                <router-link title="Outlinks" to="/outlinks"><Backlink :size="32"/></router-link>
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
    max-width 1000px
    width 100%
    margin auto
    color #ffffffbb

.footer-title
    color #ffffff77
    font-weight 500

.footer-grid
    display grid 
    grid-template-columns 1fr 1fr 1fr
    grid-gap 30px
    @media (max-width 800px)
        grid-template-columns 1fr 1fr
    @media (max-width 500px)
        grid-template-columns 1fr

a
    color #ffffffdd

.links
    padding-top 5px
    display grid 
    grid-gap 20px
    grid-template-columns max-content 1fr

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
import pentark from '@/images/pentark.png'
import buttonInput from '@/components/buttonInput'

/**
 * Social Icons
 */
import Email from 'icons/Email'
import DevTo from 'icons/DevTo'
import Twitch from 'icons/Twitch'
import Reddit from 'icons/Reddit'
import Youtube from 'icons/Youtube'
import Discord from 'icons/Discord'
import FacebookMessenger from 'icons/FacebookMessenger'
import Facebook from 'icons/Facebook'
import Twitter from 'icons/Twitter'
import Instagram from 'icons/Instagram'
import Backlink from 'icons/Link'
import ChevronIcon from 'icons/ChevronRight'

export default {
    setup () {
        return {
            pentark,
            links: [
                [
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
                    }
                ], [
                    {
                        text: 'Sign In',
                        href: '/sign-in'
                    },
                    {
                        text: 'myPro',
                        href: '/app'
                    },
                    {
                        text: 'PromaBank',
                        href: 'https://promabank.com'
                    },
                    {
                        text: 'Discord',
                        href: 'https://discord.gg/frVSDck'
                    },
                    {
                        text: 'Values',
                        href: '/information/values'
                    }
                ]
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
        Backlink,
        ChevronIcon
    }
}
</script>
