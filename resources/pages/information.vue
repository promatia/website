<template>
    <web>
        <template slot="title">Information</template>
        <template slot="content">
            <div class="wrapper">
                <h1 class="big-text">
                    Information Hub
                </h1>
                <div class="grid-list">
                    <a href="/information/values" class="info-item">
                        <div class="flex"><VisionIcon/><h2 class="subtitle">Vision &amp; Values</h2></div>
                        <div class="description">Promatia has a detailed vision of the future. Find out how you can help us help you.</div>
                    </a>
                    <a href="/information/government" class="info-item">
                        <div class="flex"><GovernmentIcon/><h2 class="subtitle">Our Government</h2></div>
                        <div class="description">Learn more about Promatia's unique system of government, how laws are passed, and how Ministires are formed and run.</div>
                    </a>
                    <a href="/information/plan" class="info-item">
                        <div class="flex"><PlanIcon/><h2 class="subtitle">Our Plan</h2></div>
                        <div class="description">See how you plan to bring Promatia in to fruition. Get a roadmap of events and updates.</div>
                    </a>
                    <a href="/information/citizenship" class="info-item">
                        <div class="flex"><CitizenshipIcon/><h2 class="subtitle">Citizenship</h2></div>
                        <div class="description">Find out what being a citizen of Promatia will mean to you, and how to becoming a citizen of Promatia can help the project.</div>
                    </a>
                    <a href="/information/mypro" class="info-item">
                        <div class="flex"><ProIcon/><h2 class="subtitle">myPro</h2></div>
                        <div class="description">Need to know more about myPro and how to best utilize the resources it provides? We have you covered with this indepth guide about the myPro platform.</div>
                    </a>
                    <a href="/information/services" class="info-item">
                        <div class="flex"><ServiceIcon/><h2 class="subtitle">Services</h2></div>
                        <div class="description">It can be a little confusing trying to find a specific service we offer. So we put them all into one easy to access location.</div>
                    </a>
                    <a href="/information/lumina" class="info-item">
                        <div class="flex"><LuminaIcon/><h2 class="subtitle">Lumina</h2></div>
                        <div class="description">Lumina will be Promatia's first city. Learn about how it will be built, what techonologies we will use, and what to look forward to.</div>
                    </a>
                    <a href="/information/voting" class="info-item">
                        <div class="flex"><VoteIcon/><h2 class="subtitle">Voting</h2></div>
                        <div class="description">Need help getting involved in Promatia's direct democracy? No problem! You can inform yourself on the voting process here.</div>
                    </a>
                    <a href="/information/business" class="info-item">
                        <div class="flex"><BusinessIcon/><h2 class="subtitle">Starting a Business</h2></div>
                        <div class="description">Do you plan to start or operate an existing business in Promatia? We can help you set up your business to get it up and running smoothly.</div>
                    </a>
                    <a href="/information/proma" class="info-item">
                        <div class="flex"><MoneyIcon/><h2 class="subtitle">Monetary System</h2></div>
                        <div class="description">Learn more about Promatia's unique digital currency, the Proma, and how using it can automate taxes and transactions with PromaBank.</div>
                    </a>
                    <a href="/information/education" class="info-item">
                        <div class="flex"><EducationIcon/><h2 class="subtitle">Education</h2></div>
                        <div class="description">Promatia aims to provide world class education curriculum. Learn how to register and reroll in our education programs.</div>
                    </a>
                    <a href="/information/work" class="info-item">
                        <div class="flex"><WorkIcon/><h2 class="subtitle">Work &amp; Employment</h2></div>
                        <div class="description">Applying for a new job? Promatia lists every employer looking to hire. Find out how to use this tool to job search.</div>
                    </a>
                    <a href="/information/family" class="info-item">
                        <div class="flex"><FamilyIcon/><h2 class="subtitle">Family</h2></div>
                        <div class="description">Want to help grow the world's newest nation? Learn about the benefits of starting a family in Promatia.</div>
                    </a>
                    <a href="/information/budget" class="info-item">
                        <div class="flex"><BudgetIcon/><h2 class="subtitle">Budgeting &amp; FairTax</h2></div>
                        <div class="description">The government of Promatia keeps a tightly mangaged budget. Find out how we allocate the taxed you pay, and learn about FairTax.</div>
                    </a>
                    <a href="/information/law" class="info-item">
                        <div class="flex"><LawsIcon/><h2 class="subtitle">Laws</h2></div>
                        <div class="description">Keep up to date with Promatia's fast acting legal system. View all of Promatia's active legislation in our easy to use portal.</div>
                    </a>
                    <a href="/information/tourism" class="info-item">
                        <div class="flex"><TourismIcon/><h2 class="subtitle">Tourism</h2></div>
                        <div class="description">Get information how you can visit Proamtia, and it's iconic sights. Learn how you can apply for an holiday visa.</div>
                    </a>
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

.info-item h2
    padding 0
    padding-left 5px
    margin 0

.flex  
    display flex
    align-items center

.description
    padding-top 10px
    color mix($text, transparent, 75%)

.subtitle
    color $text
    font-weight 500
    font-size 1.2em
.big-text
    margin 0
.wrapper
    padding 80px 40px
    max-width: 1000px
    margin: auto
.grid-list
    display grid
    grid-gap 0 0px
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    justify-content center
    .material-design-icon
        color #3C7CBC
    .info-item
        display block
        height 100%
        width 100%
        text-decoration none
        border-bottom 5px solid #DDDDDD
        background-color #FFFFFF
        padding 15px
    > *:hover
        border-bottom 5px solid #3C7CBC
        background-color #F6F6F6
        padding 15px
        .subtitle
            color #3C7CBC
            text-decoration underline
    
</style>
<script>
import web from '@/layouts/web'
import VisionIcon from 'icons/Eye'
import GovernmentIcon from 'icons/Bank'
import PlanIcon from 'icons/FloorPlan'
import CitizenshipIcon from 'icons/PassportBiometric'
import ProIcon from 'icons/Bank'
import ServiceIcon from 'icons/Toolbox'
import LuminaIcon from 'icons/Domain'
import VoteIcon from 'icons/CheckboxMarkedOutline'
import BusinessIcon from 'icons/Briefcase'
import MoneyIcon from 'icons/Domain'
import EducationIcon from 'icons/BookOpenPageVariant'
import WorkIcon from '@/components/icons/Work'
import FamilyIcon from 'icons/HomeHeart'
import BudgetIcon from 'icons/ChartPie'
import TourismIcon from 'icons/AirplaneLanding'
import LawsIcon from 'icons/ScriptText'
import MonetarySystemIcon from '@/components/icons/Proma'

export default {
    components: {
        web,
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
        MonetarySystemIcon
    }
}
</script>
