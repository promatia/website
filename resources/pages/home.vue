<template>
    <web>
        <template slot="description">Promatia is a new developing nation-state which is in the process of establishing a new and autonomous government, city, community, country, society and nation. Promatia is on-track to becoming a self-sufficient, sustainable and independent nation.</template>
        <template slot="head">
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "GovernmentOrganization",
                "name": "Promatia",
                "alternateName": "Government of Promatia",
                "url": "https://promatia.com",
                "logo": "https://promatia.com/apple-icon.png",
                "foundingDate": "22nd November 1999",
                "description": "Promatia is a new government project located in Northern Australia with the goals of establishing a new, technologically innovative and environmentally sustainable nation with high living standards. Promatia's historical roots go as far back as 1999, but have unified with other new-country-projects to form what is now Promatia",
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
                    }
                ],
                "sameAs": [
                    "https://facebook.com/promatiagov",
                    "https://twitter.com/promatiagov",
                    "https://promatia.com"
                ]
            }
            </script>
            <!-- SEO Test to remove aggregate rating
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
                                'A New Life']"/></h1>
                            <p>
                                Welcome to Promatia, a new country project located in Northern Australia with its own government, currency and laws.
                            </p>
                            <p>
                                Promatia's historical roots go as far back as 1999, formed from large number of new nation-state projects that unified to form promatia.
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
                                <li>Develop cheap, modern infrastructure, to achieve truly high living standards.</li>
                                <li>Modernize and digitize banking, education, governance and much more.</li>
                                <li>Create a model for an environmentally-sustainable and economically-viable nation</li>
                                <li>Create a safe and free society, where citizens can pursue their life goals.</li>
                            </ul>
                            <p>We are always looking for new risk-loving and passionate citizens who want to start a new life in Promatia. Citizens can help through intellect, muscle, enterprise, finance or networking</p>
                            <buttonInput text="Become a citizen" href="/start"/>
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
        </template>
    </web>
</template>
<style lang="stylus" scoped>

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
    @media (max-width 900px)
        font-size 1.6em
    @media (max-width 700px)
        font-size 1.4em

.live
    color #ff5555
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
        background #ff5555

.graph-info
    display grid
    grid-template-columns auto auto 
    grid-gap 20px
    h2
        margin 0
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
import web from "@/layouts/web"
import hero from "@/components/hero"
import northernTerritory from "@/images/northernTerritory.jpg"
import textSwitcher from "@/components/textSwitcher"
import buttonInput from "@/components/buttonInput"
import Chart from "chart.js/dist/Chart.min"

export default {
    setup() {
        return {
            count: 283,
            lastMonth: 150,
            northernTerritory
        }
    },
    async mounted(){
        let chart = new Chart(this.$refs.canvas, {
            type: 'line',
            data: {
                borderColor: 'rgba(255,255,255,0.3)',
                labels: ['June', 'July', 'August', 'September', 'November'],
                datasets: [{
                    label: 'Number of citizens: ',
                    borderColor: 'white',
                    data: [0,20, 100, 120, 289]
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
    },
    components: {
        web,
        hero,
        textSwitcher,
        buttonInput
    }
}
</script>