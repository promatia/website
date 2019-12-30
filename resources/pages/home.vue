<template>
    <web>
        <template slot="description">Promatia is a new developing nation-state which is in the process of establishing a new and autonomous government, city, community, country, society and nation. Promatia is on-track to becoming a self-sufficient, sustainable and independent nation.</template>
        <template slot="head">
            <link rel="profile" href="http://microformats.org/profile/hcard">
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "GovernmentOrganization",
                "name": "Promatia",
                "alternateName": "Government of Promatia",
                "url": "https://promatia.com",
                "logo": "https://promatia.com/android-chrome-512x512.png",
                "foundingDate": "1st August, 2019",
                "description": "Promatia is a new government project located in Northern Australia with the goals of establishing a new, technologically innovative and environmentally sustainable nation with high living standards. Promatia's historical roots go as far back as 1999, but have unified with other new-country-projects to form what is now Promatia",
                "sameAs": [
                    "https://facebook.com/promatiagov",
                    "https://twitter.com/promatiagov",
                    "https://promatia.com"
                ]
            }
            </script>
            
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "myPro",
                "applicationCategory": "https://schema.org/WebApplication",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.96",
                    "ratingCount": "364"
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
                            <h1 class="special-title">Start <textSwitcher :items="[
                                'Promatia',
                                'A New Nation',
                                'A New Government',
                                'A New City',
                                'A New Society',
                                'A New Country',
                                'A New Home',
                                'A New Life']"/></h1>
                            <p>
                                Welcome to Promatia, a new country project located in Northern Australia with its own government, currency and laws.
                            </p>
                            <p>
                                Promatia formed from a unification of a number of nation-state projects, with one members history going back as far as November 1999.
                            </p>
                            <p>
                                Promatia is in the process of establishing a new and autonomous government, city, community, country, society and nation. Promatia is on-track to becoming a self-sufficient, sustainable and independent nation.
                            </p>
                            <p>
                                Our aspirations are to:
                            </p>
                            <ul>
                                <li>Create a pragmatic government, led by citizens for citizens.</li>
                                <li>Allow citizens to pursue their life goals, aided by our government.</li>
                                <li>Develop inexpensive, modern infrastructure, to achieve truly high living standards.</li>
                                <li>Modernize and digitize banking, education, governance and much more.</li>
                                <li>Create a model for an environmentally-sustainable and economically-viable nation</li>
                                <li>Create a safe and free society, where citizens can pursue their life goals.</li>
                            </ul>
                            <p>We are always looking for new risk-loving and passionate citizens who want to start a new life in Promatia. Citizens can help through intellect, muscle, enterprise, finance or networking</p>
                            <buttonInput class="button" text="Become a citizen" to="/start"/>
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
                                    <h2>{{ count }}</h2>
                                </div>
                                <div class="align-text-right">
                                    <div>Past 60 days</div>
                                    <h2><span class="green">+{{ lastMonth }}</span> New Citizens</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </hero>
            <hero>
                <div class="grid-info-area">
                    <div class="main">
                        <h2>The modern solution to governance</h2>
                        <p>
                            Since Promatia was formed in August 2019, our goal has been to create a citizen experience unlike any nation. Promatia is focused on technological innovation in the government, particularly in the areas of digital governance and government services.
                        </p>
                        <h3>
                            Digital Governance
                        </h3>
                        <p>
                            Our nation is actively working on digital technology to remove bureacracy, and make every day life for citizens easier, more convenient. In Promatia, every citizen receives a myPro account, which is used to access various government services including, but not limited to:
                        </p>
                        <div class="grid-list">
                            <div>Human Services</div>
                            <div>Banking System</div>
                            <div>Voting System</div>
                            <div>Licensing System</div>
                            <div>Business System</div>
                            <div>Employment</div>
                            <div>Healthcare</div>
                            <div>Education</div>
                            <div>Budget &amp; Finances</div>
                            <div>Land System</div>
                            <div>Tax Affairs</div>
                            <div>Utility Services</div>
                        </div>
                        <p>The heavy digitization and automation of these services, allows for smaller government, lower taxes, and faster, better and more efficient services</p>
                        <h3>By Citizens, For Citizens</h3>
                        <p>
                            Promatia’s government uses a digital direct democracy for creating laws and electing officials, this means that our citizens decide laws, and elect represenatives to administer them. Every citizen has a voice in the way the nation is run. Citizens can propose laws and petition for them to be passed to the direct democracy.
                        </p>
                        <h3>Banking &amp; Tax</h3>
                        <p>
                            Promatia has created a new currency and banking system which automates taxation for nearly everyone. Our tax is a progressive consumption tax charged on purchases, income is tax free, until it is spent. Promatia only has one bank, which enables instantanous money transfers.
                        </p>
                        <h3>Our Plan To Establish A City</h3>
                        <p>
                            Promatia plans to establish a new modern city in our claim, with plans underway. The city will be named <strong>Lumina</strong>, which means <em>Light</em> in latin. The city is named after <a href="https://en.wikipedia.org/wiki/William_Light">Colonel William Light</a>, who founded the city <a href="https://en.wikipedia.org/wiki/Adelaide">Adelaide</a> in Australia. Join Promatia, as we set out to create another legacy.
                        </p>
                        <div class="center">
                            <buttonInput class="button" href="/start" text="Become a citizen"/>
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
                            <div>{{ count }} Citizens</div>

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
import { onMounted } from '@vue/composition-api'

export default {
    setup (props, { refs }) {
        onMounted(async ()=>{
            let ctx = refs.canvas.getContext('2d')
            var gradient = ctx.createLinearGradient(0, 0, 0, 400)
            gradient.addColorStop(0, 'rgba(255,255,255,0.5)')
            gradient.addColorStop(1, 'rgba(255,255,255,0)')

            let { default: Chart } = await import('chart.js/dist/Chart.min') //lazy-load chart library

            new Chart(refs.canvas, {
                type: 'line',
                data: {
                    borderColor: 'rgba(255,255,255,0.3)',
                    labels: ['June', 'July', 'August', 'September', 'November', 'December'],
                    datasets: [{
                        backgroundColor: gradient,
                        label: 'Number of citizens',
                        borderColor: 'white',
                        data: [0, 20, 100, 120, 289, 348]
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
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
        })
        return {
            count: 348,
            lastMonth: 150,
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
