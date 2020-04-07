<template>
    <web>
        <template slot="title">Information</template>
        <template slot="content">
            <div class="wrapper">
                <h1 class="big-text">
                    <center>Information Hub</center><br>
                </h1>
                <div class="grid-list">
                    <div>
                        <a href="/information/values" class="fill-div">
                        <div class="flex"><VisionIcon/><h2 class="subtitle">Vision &amp; Values</h2></div>
                        <div class="para">Promatia has a detailed vision of the future. Find out how you can help us help you.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/government" class="fill-div">
                        <div class="flex"><GovernmentIcon/><h2 class="subtitle">Our Government</h2></div>
                        <div class="para">Learn more about Promatia's unique system of government, how laws are passed, and how Ministires are formed and run.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/plan" class="fill-div">
                        <div class="flex"><PlanIcon/><h2 class="subtitle">Our Plan</h2></div>
                        <div class="para">See how you plan to bring Promatia in to fruition. Get a roadmap of events and updates.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/citizenship" class="fill-div">
                        <div class="flex"><CitizenshipIcon/><h2 class="subtitle">Citizenship</h2></div>
                        <div class="para">Find out what being a citizen of Promatia will mean to you, and how to becoming a citizen of Promatia can help the project.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/mypro" class="fill-div">
                        <div class="flex"><ProIcon/><h2 class="subtitle">myPro</h2></div>
                        <div class="para">Need to know more about myPro and how to best utilize the resources it provides? We have you covered with this indepth guide about the myPro platform.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/services" class="fill-div">
                        <div class="flex"><ServiceIcon/><h2 class="subtitle">Services</h2></div>
                        <div class="para">It can be a little confusing trying to find a specific service we offer. So we put them all into one easy to access location.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/lumina" class="fill-div">
                        <div class="flex"><LuminaIcon/><h2 class="subtitle">Lumina</h2></div>
                        <div class="para">Lumina will be Promatia's first city. Learn about how it will be built, what techonologies we will use, and what to look forward to.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/voting" class="fill-div">
                        <div class="flex"><VoteIcon/><h2 class="subtitle">Voting</h2></div>
                        <div class="para">Need help getting involved in Promatia's direct democracy? No problem! You can inform yourself on the voting process here.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/business" class="fill-div">
                        <div class="flex"><BusinessIcon/><h2 class="subtitle">Starting a Business</h2></div>
                        <div class="para">Do you plan to start or operate an existing business in Promatia? We can help you set up your business to get it up and running smoothly.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/proma" class="fill-div">
                        <div class="flex"><MoneyIcon/><h2 class="subtitle">Monetary System</h2></div>
                        <div class="para">Learn more about Promatia's unique digital currency, the Proma, and how using it can automate taxes and transactions with PromaBank.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/education" class="fill-div">
                        <div class="flex"><EducationIcon/><h2 class="subtitle">Education</h2></div>
                        <div class="para">Promatia aims to provide world class education curriculum. Learn how to register and reroll in our education programs.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/work" class="fill-div">
                        <div class="flex"><WorkIcon/><h2 class="subtitle">Work &amp; Employment</h2></div>
                        <div class="para">Applying for a new job? Promatia lists every employer looking to hire. Find out how to use this tool to job search.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/family" class="fill-div">
                        <div class="flex"><FamilyIcon/><h2 class="subtitle">Family</h2></div>
                        <div class="para">Want to help grow the world's newest nation? Learn about the benefits of starting a family in Promatia.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/budget" class="fill-div">
                        <div class="flex"><BudgetIcon/><h2 class="subtitle">Budgeting &amp; FairTax</h2></div>
                        <div class="para">The government of Promatia keeps a tightly mangaged budget. Find out how we allocate the taxed you pay, and learn about FairTax.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/law" class="fill-div">
                        <div class="flex"><LawIcon/><h2 class="subtitle">Laws</h2></div>
                        <div class="para">Keep up to date with Promatia's fast acting legal system. View all of Promatia's active legislation in our easy to use portal.</div>
                        </a>
                    </div>
                    <div>
                        <a href="/information/tourism" class="fill-div">
                        <div class="flex"><TourismIcon/><h2 class="subtitle">Tourism</h2></div>
                        <div class="para">Get information how you can visit Proamtia, and it's iconic sights. Learn how you can apply for an holiday visa.</div>
                        </a>
                    </div>
                </div>
                <p>
                    We also offer a wide range of <a href="/information/services">Government Services</a>.
                </p>
            </div>
        </template>
    </web>
</template>
<style lang="stylus" scoped>
h2
    padding 0
    padding-left 5px
    margin 0
a p
    color #404040
    font-weight 400
.flex  
    display flex
    align-items center
.para
    padding-top 5px
    color #1B232C
.subtitle
    color #1B232C
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
    .material-design-icon
        color #3C7CBC
    grid-gap 0 0px
        color #FF0000
    > * 
        border-bottom 5px solid #DDDDDD
        background-color #FFFFFF
        height auto
        padding 15px
    > * p
        margin-bottom 0px
    > * p:hover
        margin-bottom 0px
    > *:hover
        border-bottom 5px solid #3C7CBC
        background-color #F6F6F6
        padding 15px
        .subtitle
            color #3C7CBC
            text-decoration underline
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    a.fill-div
        display block
        height 100%
        width 100%
        text-decoration: none
</style>
<script>
import web from "@/layouts/web"
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
import LawsIcon from 'icons/ScriptText'
import TourismIcon from 'icons/AirplaneLanding'
import web from '@/layouts/web'

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
        TourismIcon
    }
}
</script>
