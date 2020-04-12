<template>
    <web>
        <template slot="title">Coronavirus</template>
        <template slot="content">
            <div class="hero-header">
                <div class="content">
                    <h1 itemprop="name">Coronavirus</h1>
                    <hr>
                    <div class="subtitle" itemprop="description">
                        News and infromation related to the COVID-19 Pandemic.
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="inner-page">
                    <p>
                        With the recent outbreak of the SARS-COV-2 virus that causes the COVID-19 coronavirus disease, there has been some confusion about how to handle an infection in your local area. Promatia's action plan for the COVID-19 pandemic is total, and we are asking that you follow the directions of your municipal authorities and local law enforcement.
                    </p>
                    <p>
                        The Minister's of Promatia are urging you to stay home if you believe that you are sick. If are sick for any reason, even if you believe you do not have a coronavirus infection, do not go to your place of work. Please contact your employer.
                    </p>
                    <p>
                        We also advise you to contact your medical provider, insurer, or family doctor. If you do not have access to these kinds of services, please get into contact with a local clinic or government-operated medical facility for personal assistance at no cost.
                    </p>
                    <p>
                        If your employer has any questions regarding the status of the Aromatic government's emergency order, please refer them to this page. We encourage any business with the capability to do so to allow their employees to work remotely, or from home if possible. If you work in an industry that is critical to the continuity of Promatia, or another essential industry: such as in logistics distribution, food preparation, or as a healthcare service provider; you are asked to maintain your work schedule whenever possible.
                    </p>
                    <p>
                        During this person of time, there may be many school closures, closures of other high-density buildings, or other high traffic areas. If you have a child that is sick, please keep them at home, and contact a medical professional, pediatric physician, or family doctor.
                    </p>
                    <p>
                        If you live with a person over the age of 55 or with some who has a preexisting or chronic medical condition, especially those with immune weakness, other vulnerabilities to pathogenic disease, or those with breathing or lung issues; please refrain from visiting them during this critical period. Do not visit any hospice, or long-term care facilities, that specialize in care for the elderly, unless you plan to provide direct medical assistance.
                    </p>
                    <p>
                        Please keep watch over yourself and those whom you interact with. You should regularly practice good hygiene. This includes washing your hands frequently, and more frequently after coming into contact with items touched by many people. Sanitize surfaces and commonly used items as often as is possible. Cough or sneeze into the inside of your elbow to reduce the distance sickness can spread. Avoid touching your eyes, nose, and mouth whenever possible. 
                    </p>
                    <p>
                        In addition to this, we are asking all citizens to avoid gathering in groups containing more than 10 people. To avoid eating or drinking in public places, attending public gatherings, or travelling outside in groups for 3 or more. Please limit all non-essential travel, and move to another location only to obtain necessities for you and your family.
                    </p>
                    <p>
                        We appreciate your cooperation during this critical period. The Promatian government will do what it can to ease the pressure caused by this situation. If you need immediate medical assistance, or you think that you may have been exposed to a person with a COVID-19 infection; please contact any local medical facility or testing centre for testing and treatment advice.
                    </p>
                </div>
            </div>
        <Rater/>
        </template>
    </web>
</template>
<style lang="stylus" scoped>

.hero-header
    background #03539D
    padding 20px 20px
    position relative
    overflow hidden
    color white
    h1
        font-weight 500
        font-size 3.2em
        margin-top 0
        margin-bottom 10px
    hr
        border 3px solid #01294D
        border-radius 3px
        margin-bottom 15px
    .subtitle
        font-size 1.5em
    .content
        max-width 800px
        align-items center
        margin auto
        position relative
        z-index 1

.subtitle
    font-weight 500
    font-size 1.2em

.big-text
    margin 0

.wrapper
    padding 20px 20px
    max-width 1000px
    width 100%
    margin auto
    background #ffffff

.inner-page
    max-width 750px
    font-size 1.1em
    margin auto
</style>
<script>
import web from "@/layouts/web"
import Rater from "@/components/rater"

export default {
    components: {
        web,
        Rater
    }
}
</script>
