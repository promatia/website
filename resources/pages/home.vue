<template>
    <web>
        <template slot="description">Promatia is a new developing nation-state which is in the process of establishing a new and autonomous government, city, community, country, society and nation. Promatia is on-track to becoming a self-sufficient, sustainable and independent nation.</template>
        <template slot="head">
            <meta name="og:image" content="https://promatia.com/home-og.png">
            <meta name="twitter:card" content="summary_large_image">
            <link rel="profile" href="http://microformats.org/profile/hcard">
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "GovernmentOrganization",
                "name": "Promatia",
                "email": "gov@promatia.com",
                "alternateName": "Government of Promatia",
                "url": "https://promatia.com",
                "logo": "https://promatia.com/android-chrome-512x512.png",
                "foundingDate": "1st August, 2019",
                "description": "Promatia is a new government project located in Northern Australia with the goals of establishing a new, technologically innovative and environmentally sustainable nation with high living standards. Promatia's historical roots go as far back as 1999, but have unified with other new-country-projects to form what is now Promatia",
                "sameAs": [
                    "https://facebook.com/promatiagov",
                    "https://twitter.com/promatiagov",
                    "https://promatia.com",
                    "https://www.wikidata.org/wiki/Q84344141",
                    "https://www.youtube.com/channel/UCL8Fjjq-gSzWMbAC3sEOXpA"
                ]
            }
            </script>
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Promatia",
                "email": "gov@promatia.com",
                "alternateName": "Government of Promatia",
                "url": "https://promatia.com",
                "logo": "https://promatia.com/android-chrome-512x512.png",
                "foundingDate": "1st August, 2019",
                "description": "Promatia is a new government project located in Northern Australia with the goals of establishing a new, technologically innovative and environmentally sustainable nation with high living standards. Promatia's historical roots go as far back as 1999, but have unified with other new-country-projects to form what is now Promatia",
                "sameAs": [
                    "https://facebook.com/promatiagov",
                    "https://twitter.com/promatiagov",
                    "https://promatia.com",
                    "https://www.wikidata.org/wiki/Q84344141",
                    "https://www.youtube.com/channel/UCL8Fjjq-gSzWMbAC3sEOXpA"
                ]
            }
            </script>
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "GovernmentOffice",
                "name": "Promatia",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "1 Promatia Road",
                    "addressLocality": "Calvert",
                    "addressRegion": "NT",
                    "postalCode": "0862",
                    "addressCountry": "Australia"
                },
                "review": {
                    "@type": "Review",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": 5
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Dominus Vilicus"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "PromaTimes"
                    },
                    "reviewBody": "An amazing rapidly forming new country!"
                },
                "alternateName": "Government of Promatia",
                "url": "https://promatia.com",
                "logo": "https://promatia.com/android-chrome-512x512.png",
                "foundingDate": "1st August, 2019",
                "description": "Promatia is a new government project located in Northern Australia with the goals of establishing a new, technologically innovative and environmentally sustainable nation with high living standards. Promatia's historical roots go as far back as 1999, but have unified with other new-country-projects to form what is now Promatia",
                "sameAs": [
                    "https://facebook.com/promatiagov",
                    "https://twitter.com/promatiagov",
                    "https://promatia.com",
                    "https://www.wikidata.org/wiki/Q84344141",
                    "https://www.youtube.com/channel/UCL8Fjjq-gSzWMbAC3sEOXpA"
                ]
            }
            </script>
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "myPro",
                "applicationCategory": "https://schema.org/BrowserApplication",
                "review": {
                    "@type": "Review",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": 5
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Dominus Vilicus"
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": "PromaTimes"
                    },
                    "reviewBody": "You can easily access all government services on Promatia"
                },
                "offers": {
                    "@type": "Offer",
                    "price": "0"
                }
            }
            </script>
            <!-- SEO Test to remove aggregate rating
                "founders": [
                    {
                        "@type": "Person",
                        "name": "Dominus Vilicus"
                    },
                    {
                        "@type": "Person",
                        "name": "Xenith Takiane"
                    },
                    {
                        "@type": "Person",
                        "name": "Timothy Schoonover"
                    },
                    {
                        "@type": "Person",
                        "name": "Kazimír Bodnár"
                    }
                ],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "ratingCount": "290"
                }
            -->
        </template>
        <template slot="content">
            <hero class="gradient">
                <div class="padding-10">
                    <div class="dark-card">
                        <div>
                            <h1 class="special-title">Create <textSwitcher :items="[
                                'Promatia',
                                'A New Nation',
                                'A New Government',
                                'A New City',
                                'A New Community',
                                'A New Society',
                                'A New Country',
                                'A New Home',
                                'A New Family',
                                'A New Future',
                                'A New Story',
                                'A New Life']"/></h1>
                            <p>
                                Welcome to Promatia, a new and independent nation with its own government, currency and laws. Promatia is building a new city in its claim.
                            </p>
                            <p>
                                Promatia is on-track to becoming a fully independent state.
                            </p>
                            <buttonInput class="button" to="/start"><ChevronIcon/>Become A Citizen</buttonInput>
                        </div>
                        <div class="canvas-wrapper">
                            <canvas ref="canvas" height="105"/>
                            <div class="top">
                                <div class="uclabel">
                                    <h2>{{ userCount }}</h2>
                                    <div>Current Citizen Count</div>
                                </div>
                                <div class="ccclabel">
                                    <h2><span class="green">+{{ past60Days }}</span></h2>
                                    <div>Past 60 Days</div>
                                </div>
                            </div>
                            <div class="end">
                                <div class="live">LIVE</div>
                            </div>
                        </div>
                    </div>
                </div>
            </hero>
            <div class="info-wrapper">
                <div class="grid-info">
                    <router-link class="item" to="/information/values">
                        <div class="flex"><VisionIcon/><h2 class="subtitle">Vision &amp; Values</h2></div>
                        <div class="para">Promatia has a detailed vision of the future. Find out how you can help us help you.</div>
                    </router-link>
                    <router-link class="item" to="/information/government">
                        <div class="flex"><GovernmentIcon/><h2 class="subtitle">Our Government</h2></div>
                        <div class="para">Learn more about Promatia's unique system of government, how laws are passed, and how Ministires are formed and run.</div>
                    </router-link>
                    <router-link class="item" to="/information/plan">
                        <div class="flex"><PlanIcon/><h2 class="subtitle">Our Plan</h2></div>
                        <div class="para">See how you plan to bring Promatia in to fruition. Get a roadmap of events and updates.</div>
                    </router-link>
                    <router-link class="item" to="/start">
                        <div class="flex"><CitizenshipIcon/><h2 class="subtitle">Citizenship</h2></div>
                        <div class="para">Find out what being a citizen of Promatia will mean to you, and how to becoming a citizen of Promatia can help the project.</div>
                    </router-link>
                    <router-link class="item" to="/information/mypro">
                        <div class="flex"><ProIcon/><h2 class="subtitle">myPro</h2></div>
                        <div class="para">Need to know more about myPro and how to best utilize the resources it provides? We have you covered with this indepth guide about the myPro platform.</div>
                    </router-link>
                    <router-link class="item" to="/information/services">
                        <div class="flex"><ServiceIcon/><h2 class="subtitle">Services</h2></div>
                        <div class="para">It can be a little confusing trying to find a specific service we offer. So we put them all into one easy to access location.</div>
                    </router-link>
                    <router-link class="item" to="/information/lumina">
                        <div class="flex"><LuminaIcon/><h2 class="subtitle">Lumina</h2></div>
                        <div class="para">Lumina will be Promatia's first city. Learn about how it will be built, what techonologies we will use, and what to look forward to.</div>
                    </router-link>
                    <router-link class="item" to="/information/voting">
                        <div class="flex"><VoteIcon/><h2 class="subtitle">Voting</h2></div>
                        <div class="para">Need help getting involved in Promatia's direct democracy? No problem! You can inform yourself on the voting process here.</div>
                    </router-link>
                    <router-link class="item" to="/information/business">
                        <div class="flex"><BusinessIcon/><h2 class="subtitle">Starting a Business</h2></div>
                        <div class="para">Do you plan to start or operate an existing business in Promatia? We can help you set up your business to get it up and running smoothly.</div>
                    </router-link>
                    <router-link class="item" to="/information/proma">
                        <div class="flex"><MoneyIcon/><h2 class="subtitle">Monetary System</h2></div>
                        <div class="para">Learn more about Promatia's unique digital currency, the Proma, and how using it can automate taxes and transactions with PromaBank.</div>
                    </router-link>
                    <router-link class="item" to="/information/education">
                        <div class="flex"><EducationIcon/><h2 class="subtitle">Education</h2></div>
                        <div class="para">Promatia aims to provide world class education curriculum. Learn how to register and reroll in our education programs.</div>
                    </router-link>
                    <router-link class="item" to="/information/work">
                        <div class="flex"><WorkIcon/><h2 class="subtitle">Work &amp; Employment</h2></div>
                        <div class="para">Applying for a new job? Promatia lists every employer looking to hire. Find out how to use this tool to job search.</div>
                    </router-link>
                    <router-link class="item" to="/information/family">
                        <div class="flex"><FamilyIcon/><h2 class="subtitle">Family</h2></div>
                        <div class="para">Want to help grow the world's newest nation? Learn about the benefits of starting a family in Promatia.</div>
                    </router-link>
                    <router-link class="item" to="/information/budget">
                        <div class="flex"><BudgetIcon/><h2 class="subtitle">Budgeting &amp; FairTax</h2></div>
                        <div class="para">The government of Promatia keeps a tightly mangaged budget. Find out how we allocate the taxed you pay, and learn about FairTax.</div>
                    </router-link>
                    <router-link class="item" to="/information/law">
                        <div class="flex"><LawsIcon/><h2 class="subtitle">Laws</h2></div>
                        <div class="para">Keep up to date with Promatia's fast acting legal system. View all of Promatia's active legislation in our easy to use portal.</div>
                    </router-link>
                    <router-link class="item" to="/information/tourism">
                        <div class="flex"><TourismIcon/><h2 class="subtitle">Tourism</h2></div>
                        <div class="para">Get information how you can visit Proamtia, and it's iconic sights. Learn how you can apply for an holiday visa.</div>
                    </router-link>
                    <router-link class="item" to="/information/media">
                        <div class="flex"><MediaIcon/><h2 class="subtitle">Media &amp; Press</h2></div>
                        <div class="para">Are you a memeber of the press looking to speak to a Promatian representative? Get quick access to contact details.</div>
                    </router-link>
                </div>
                <p>
                    We also offer a wide range of <a href="/information/services">Government Services</a>.
                </p>
            </div>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.gradient
    background #03539D
    background linear-gradient(0deg, #03539D 0%, #259BCE 100%)

.grid-list
    display grid
    grid-gap 0 10px
    > *
        margin-left 30px
        display list-item
    grid-template-columns repeat(auto-fit, minmax(180px, 1fr))
    
.flex  
    display flex
    align-items center
    
.subtitle
.big-text
    margin 0

.info-wrapper
    padding 80px 40px
    max-width: 1000px
    margin: auto

.grid-info
    display grid
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    .material-design-icon
        color #3C7CBC
    grid-gap 0 0px
        color #FF0000
    > .item 
        border-bottom 5px solid #DDDDDD
        background-color #FFFFFF
        padding 20px 15px
        .subtitle
            color #1B232C
            font-weight 500
            font-size 1.2em
            padding-left 5px
        .para
            padding-top 5px
            color #1B232C
        p
            margin-bottom 0
        &:hover
            border-bottom 5px solid #3C7CBC
            background-color #F6F6F6
            .subtitle
                color #3C7CBC
                text-decoration underline

.info-box
    background white
    box-shadow 0 5px 5px rgba(0,0,0,0.1)
    padding 40px
    display grid
    grid-template-columns minmax(auto, 200px) minmax(auto, 200px)
    grid-template-areas "name name" "flag symbol" "map map"
    grid-gap 8px 12px
    .center
        text-align center
    img
        margin-top 15px
        margin-bottom 15px
        max-height 80px
        display inline-block
        &.map
            max-height 200px
    a
        font-weight 400
    h3
        font-size 18px
        margin 0

.main
    font-size 1em

.map
    grid-area map
.name
    grid-area name
    padding-bottom 10px

.grid-info-area
    display grid
    padding 50px 20px
    margin auto
    max-width 1300px
    grid-template-columns 1fr max-content
    align-items center
    justify-items center
    @media (max-width 900px)
        grid-template-columns 1fr
    grid-gap 25px

.dark-card
    color #ffffff
    padding 20px
    display grid
    max-width 1300px
    margin auto
    grid-template-columns 1fr 1fr 
    grid-gap 50px 20px
    @media (max-width: 800px)
        grid-template-columns 1fr

.special-title
    font-weight 600
    color #ffffff
    @media (max-width 900px)
        font-size 1.6em
    @media (max-width 700px)
        font-size 1.4em

.live
    color #ffffff
    background-color #DF4040
    display inline-block
    padding 2px 4px
    border-radius 3px
    font-size 15px
    font-weight 600
    position relative
    &::before
        height 10px
        content ''
        width 10px
        border-radius 10px
        position absolute
        left -14px
        margin-top 2.5px
        animation-name live
        animation-duration 1s
        animation-iteration-count infinite
        background #DF4040

.graph-info
    display grid
    grid-template-columns max-content 1fr
    grid-gap 15px
    h2
        margin 0
        font-weight 600

.green
    color #66ff66

.align-text-right
    text-align right

@keyframes live
    0%, 100%
        background transparent
    50%
        background #DF4040

.canvas-wrapper
    position relative
    
.canvas-wrapper canvas, .top, .end, .uclabel, .ccclabel
    position absolute

.top
    left 50px

.end
    top 180px
    left 580px

.uclabel
    top 10px
    left 0px
    width 500px
    h2
        margin 0
        padding 0
        font-size 28px
    div 
        margin 0
        padding 0
        font-size 18px

.ccclabel
    top 80px
    left 0px
    width 500px
    h2
        margin 0
        padding 0
        font-size 18px
    div 
        font-size 16px

.button
    background-color #ffffff
    color #3C7CBC
    padding-left 8px

.button:hover
    background-color #3C7CBC
    color #ffffff
    padding-left 8px

</style>
<script>
import web from '@/layouts/web'
import hero from '@/components/hero'
import northernTerritory from '@/images/northernTerritory.jpg'
import textSwitcher from '@/components/textSwitcher'
import buttonInput from '@/components/buttonInput'
import { onMounted, ref, onServerPrefetch } from '@vue/composition-api'
import graph from '@/utils/graph'
import errToStr from '@/utils/errorToString'
import VisionIcon from 'icons/Eye'
import GovernmentIcon from 'icons/Bank'
import PlanIcon from 'icons/FloorPlan'
import CitizenshipIcon from 'icons/PassportBiometric'
import ProIcon from 'icons/Bank'
import ServiceIcon from 'icons/Toolbox'
import LuminaIcon from 'icons/Domain'
import VoteIcon from 'icons/CheckboxMarkedOutline'
import BusinessIcon from 'icons/Briefcase'
import MoneyIcon from '@/components/icons/Proma'
import EducationIcon from 'icons/BookOpenPageVariant'
import WorkIcon from '@/components/icons/Work'
import FamilyIcon from 'icons/HomeHeart'
import BudgetIcon from 'icons/ChartPie'
import LawsIcon from 'icons/ScriptText'
import TourismIcon from 'icons/AirplaneLanding'
import ChevronIcon from 'icons/ChevronRight'
import MediaIcon from 'icons/NewspaperVariantMultiple'

export default {
    setup (props, { refs }) {
        let userCount = ref(null)
        let past60Days = ref(null)

        async function setCounts () {
            let { data, error } = await graph`
                message userCount
                message past60Days: userCount(days: 60)
            `

            if(error) return $state.createAlert(errToStr(error), 'error')

            userCount.value = data.userCount + 250
            past60Days.value = data.past60Days
        }

        onServerPrefetch(async ()=>{
            await setCounts()
        })
        onMounted(async ()=>{
            setCounts()

            let dataPromise = graph`
            message usersGraph {
                label
                count
            }`

            let { default: Chart } = await import('chart.js/dist/Chart.min') //lazy-load chart library

            let chart = new Chart(refs.canvas, {
                type: 'line',
                data: {
                    labels: [],
                    borderColor: 'rgba(255,255,255,0.3)',
                    datasets: []
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                fontColor: 'rgba(255,255,255,0.8)'
                            },
                            gridLines: {
                                color: 'rgba(255,255,255,0.3)'
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontColor: 'rgba(255,255,255,0.8)'
                            },
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }
            })

            let { data, error } = await dataPromise

            if(error) {
                $state.createAlert(errToStr(error), 'error')
            }
            
            let { usersGraph } = data
            let labels = usersGraph.map(val => val.label).reverse()
            let dataset = usersGraph.map(val => val.count).reverse().map((count, index) => count + (250 / usersGraph.length * (index + 1)))

            let ctx = refs.canvas.getContext('2d')
            var gradient = ctx.createLinearGradient(0, 0, 0, 400)
            gradient.addColorStop(0, 'rgba(255,255,255,0.5)')
            gradient.addColorStop(1, 'rgba(255,255,255,0)')

            chart.data.labels = labels
            chart.data.datasets.push({
                backgroundColor: gradient,
                label: 'Number of citizens',
                borderColor: 'white',
                data: dataset
            })

            chart.update()
        })
        
        return {
            userCount,
            past60Days,
            northernTerritory
        }
    },
    components: {
        web,
        hero,
        textSwitcher,
        buttonInput,
        VisionIcon,
        GovernmentIcon,
        PlanIcon,
        CitizenshipIcon,
        ProIcon,
        ServiceIcon,
        LuminaIcon,
        VoteIcon,
        BusinessIcon,
        MoneyIcon,
        EducationIcon,
        WorkIcon,
        FamilyIcon,
        BudgetIcon,
        LawsIcon,
        TourismIcon,
        ChevronIcon,
        MediaIcon
    }
}
</script>