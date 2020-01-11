<template>
    <web>
        <template slot="title">Information</template>
        <template slot="content">
            <div class="wrapper">
                <h1 class="big-text">
                    Information Hub
                </h1>
                <div class="grid-list">
                    <div>
                        <a href="/information/values" class="fill-div">Vision &amp; Values
                        <p>Promatia has a detailed vision of the future. Find out how you can help us help you.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/government" class="fill-div">Our Government
                        <p>Learn more about Promatia's unique system of government, how laws are passed, and how Ministires are formed and run.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/plan" class="fill-div">Our Plan
                        <p>See how you plan to bring Promatia in to fruition. Get a roadmap of events and updates.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/citizenship" class="fill-div">Citizenship
                        <p>Find out what being a citizen of Promatia will mean to you, and how to becoming a citizen of Promatia can help the project.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/mypro" class="fill-div">myPro
                        <p>Need to know more about myPro and how to best utilize the resources it provides? We have you covered with this indepth guide about the myPro platform.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/services" class="fill-div">Services
                        <p>It can be a little confusing trying to find a specific service we offer. So we put them all into one easy to access location.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/lumina" class="fill-div">Lumina
                        <p>Lumina will be Promatia's first city. Learn about how it will be built, what techonologies we will use, and what to look forward to.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/voting" class="fill-div">Voting
                        <p>Need help getting involved in Promatia's direct democracy? No problem! You can inform yourself on the voting process here.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/business" class="fill-div">Starting a Business
                        <p>Do you plan to start or operate an existing business in Promatia? We can help you set up your business to get it up and running smoothly.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/proma" class="fill-div">Monetary System
                        <p>Learn more about Promatia's unique digital currency, the Proma, and how using it can automate taxes and transactions with PromaBank.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/education" class="fill-div">Education
                        <p>Promatia aims to provide world class education curriculum. Learn how to register and reroll in our education programs.</p>
                        </a>
                    </div>
                    <div>
                        <a href="/information/work" class="fill-div">Work &amp; Employment
                        <p>Applying for a new job? Promatia lists every employer looking to hire. Find out how to use this tool to job search.</p>
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
a p
    color #404040
    font-weight 400
.subtitle
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
    > * 
        border-radius 5px
        border-left 5px solid #0080ff
        margin 10px
        background-color #ffffff
        height auto
        padding 4px
    > * p
        margin-bottom 0px
    > * p:hover
        margin-bottom 0px
    > *:hover
        border 2px solid #0080ff
        border-left 5px solid #0080ff
        background-color #f8f8f8
        padding 2px
        padding-left 4px
    grid-template-columns repeat(auto-fit, minmax(300px, 1fr))
    a.fill-div
        display block
        height 100%
        width 100%
        text-decoration: none
</style>
<script>
import web from "@/layouts/web"

export default {
    async serverPrefetch(){
        this.$ssrContext.ctx.status = 404
    },
    components: {
        web
    }
}
</script>