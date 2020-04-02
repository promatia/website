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
            <!--<script type="application/ld+json">
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
            </script>-->
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
            <hero class="hero image" :img="northernTerritory">
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
                                Welcome to Promatia, a new country project located on the Australian continent bordering the Gulf of Carpentaria. Promatia has its own government, currency and laws.
                            </p>
                            <p>
                                Promatia formed from the unification of a number of smaller young nation projects, with history leading back to November of 1999.
                            </p>
                            <p>
                                Promatia is in the process of establishing a new and autonomous government, city, community, and country. Promatia is on a fast track to becoming a self-sufficient, sustainable and independent nation.
                            </p>
                            <p>
                                Our aspirations are to:
                            </p>
                            <ul>
                                <li>Create a pragmatic government, led by citizens, for citizens.</li>
                                <li>Allow citizens to pursue their life goals, aided by Promatia's unique governmental system.</li>
                                <li>Develop inexpensive, modern infrastructure, to achieve the highest living standards.</li>
                                <li>Modernize and digitize every aspect of governance, banking, education, and more.</li>
                                <li>Create a model example of environmental-sustainably and economic-viably.</li>
                                <li>Create a safe and free society, where citizens can pursue their life goals.</li>
                            </ul>
                            <p>We are always looking for new risk-loving, educated, and passionate citizens who want to start a new life in Promatia. Citizens can help our project through their intellectual, physical, financial, entrepreneurship, or networking skills.</p>
                            <buttonInput class="button" text="> Become A Citizen" to="/start"/>
                        </div>
                        <div class="canvas-area">
                            <div class="top">
                                <h2>Citizen Count</h2>
                                <div class="end"><div class="live">LIVE</div></div>
                            </div>
                            <div class="canvas-wrapper">
                                <canvas ref="canvas" height="200"/>
                            </div>
                            <div class="graph-info">
                                <div>
                                    <div>Current Citizen Count</div>
                                    <h2>{{ userCount }}</h2>
                                </div>
                                <div class="align-text-right">
                                    <div>Past 60 Days</div>
                                    <h2><span class="green">+{{ past60Days }}</span> New Citizens</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </hero>
            <hero>
                <div class="grid-info-area">
                    <div class="main">
                        <h2>The Modern Solution to Governance</h2>
                        <p>
                            Since Promatia was reformed in August of 2019, our goal has been to create a citizen experience, unlike any nation. Promatia is focused on providing technological innovation in the area of digital governance. We strive to provide a world-class experience and quality of response in all government services.
                        </p>
                        <h3>
                            Digital Governance
                        </h3>
                        <p>
                            Our nation is pioneering in digital technology in an effort to eliminate bureacracy. Our goal is to make everyday life easy for citizens, and make dealing with government simple. In Promatia, every citizen receives a myPro account, which connects them, granting them access a wide range of government services including, but not limited to:
                        </p>
                        <div class="grid-list">
                            <div>Human Services</div>
                            <div>PromaBank</div>
                            <div>Instant Voting</div>
                            <div>Licensing</div>
                            <div>Business Registration</div>
                            <div>Employment Services</div>
                            <div>Healthcare Benefits</div>
                            <div>Education Enrollment</div>
                            <div>Budget &amp; Finances</div>
                            <div>Land Allocation</div>
                            <div>Tax Affairs</div>
                            <div>Utility Services</div>
                        </div>
                        <p>
                            The heavy digitization and automation, of these services, allows for smaller government, lower taxes, faster response, and better efficiency.
                        </p>
                        <h3>By Citizens, For Citizens</h3>
                        <p>
                            Promatia’s government uses a digital direct democracy for drafting its laws and electing government officials. This means that our citizens decide what laws pass, and have the power to elect the representatives who administer them. Every citizen has a voice in the way the nation is run. Citizens can propose laws, and petition for them to be passed onto the direct democracy. They may do this of their own volition.
                        </p>
                        <h3>Banking &amp; Tax</h3>
                        <p>
                            Promatia has created a new digital currency, the Proma, and the banking system to come along with it. Our banking system PromaBank automates taxation from the Point of Sale. Our tax is a progressive consumption tax charged on purchases. Income and wages are tax-free until the money that was earned is spent. Promatia only has one central bank, which enables instantaneous money transfers nationwide.
                        </p>
                        <h3>The Plan To Establish a City</h3>
                        <p>
                            Promatia plans to establish a new modern city in our claimed territory. Our nation has made significant progress on our plans, and the beginning of construction is not far away. The city will be named <strong>Lumina</strong>, which means approximately <em>Light</em> in Latin. The city is named after <a href="https://en.wikipedia.org/wiki/William_Light">Colonel William Light</a>, who founded the city of <a href="https://en.wikipedia.org/wiki/Adelaide">Adelaide</a> in Australia. Join us in Lumina, as we set out to create another legacy with Promatia.
                        </p>
                        <div class="center">
                            <buttonInput class="button" href="/start" text="> Become A Citizen"/>
                        </div>
                    </div>
                    <div>
                        <div class="info-box vcard">
                            <div class="center name">
                                <h3 class="fn org country-name organization-name adr">Promatia</h3>
                                <span class="nickname">Government of Promatia</span>
                            </div>
                            <div class="center">
                                <h3>Flag</h3>
                                <img class="logo photo" src="@/images/flag.jpg" alt="Promatia Official Flag"/>
                            </div>
                            <div class="center">
                                <h3>Symbol</h3>
                                <img src="@/images/symbol.png" alt="Promatia Official Symbol"/>
                            </div>
                            <div class="map center">
                                <h3>Map</h3>
                                <img class="map" src="@/images/map.png" alt="Promatia Map"/>
                            </div>

                            <div><h3>Website</h3></div>
                            <div><a href="https://promatia.com" class="url">promatia.com</a></div>

                            <div><h3>National Language</h3></div>
                            <div>English</div>

                            <div><h3>Legislature</h3></div>
                            <div>
                                <router-link to="/information/ministers">Ministers</router-link> +
                                <div>
                                    <router-link to="/information/direct-democracy">Direct Democracy</router-link>
                                </div>
                            </div>

                            <div><h3>Government</h3></div>
                            <div>
                                <div><router-link to="/information/ministries">Ministry System</router-link></div>
                                <div><router-link to="/information/unitary-state">Unitary State</router-link></div>
                                <div><router-link to="/information/constitution">Constitution</router-link></div>
                            </div>

                            <div><h3>Area</h3></div>
                            <div>55,000km<sup>2</sup></div>

                            <div><h3>Population</h3></div>
                            <div>{{ userCount }} Citizens</div>

                            <div><h3>Currency</h3></div>
                            <div><router-link to="/information/currency">Proma Ⱀ</router-link></div>

                            <div><h3>National Bank</h3></div>
                            <div><router-link to="/information/services/PromaBank">PromaBank</router-link></div>

                            <div><h3>Founding Date</h3></div>
                            <div class="bday">1st August, 2019</div>
                        </div>
                    </div>
                </div>
            </hero>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.grid-list
    display grid
    grid-gap 0 10px
    > *
        margin-left 30px
        display list-item
    grid-template-columns repeat(auto-fit, minmax(180px, 1fr))

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
    background rgba(0,0,0,0.45)
    border-radius 5px
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
    @media (max-width 900px)
        font-size 1.6em
    @media (max-width 700px)
        font-size 1.4em

.live
    color #ff4444
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
        background #ff4444

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

.top
    display flex
    align-items center

.end
    margin-left auto


@keyframes live
    0%, 100%
        background transparent
    50%
        background #ff6666

.canvas-area
    min-width 0
    margin auto 0

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

            userCount.value = data.userCount + 250 //add 250 to make promatia seem bigger
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
            let dataset = usersGraph.map(val => val.count + 250).reverse()

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
        buttonInput
    }
}
</script>
