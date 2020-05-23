<template>
    <web>
        <template slot="title">Education</template>
        <template slot="content">
            <div class="hero-header">
                <div class="content">
                    <h1 itemprop="name">Education</h1>
                    <hr>
                    <div class="subtitle" itemprop="description">
                        Register and enroll for educational programs.
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="inner-page">
                    <p>
                        Our education system aims to be like none other. Every citizen is entitled to free, state-funded public education at any grade level. This free education program is paid for by the FairTax imposed on monetary transactions. Each citizen may apply for this public service at any age, and for any educational or vocational subject.
                    </p>
                    <p>
                        Students of Primary and Secondary education curriculum have a choice. They may take the offer of state-funded and operated centers of learning, with free transportation to and from those institutions. Or they may select from privately operated education institutions. Students of Tertiary education may also enter state-funded university-level education courses online or on-campus. They may choose any subject made available at their campus, or any course made available from the government's education platform.
                    </p>
                    <p>
                        Citizens of Promatia may take advantage of a technology-enhanced educational curriculum. Engaged within their own time, with teaching provided by proven interactive, and open intelligence mediums. As well as Promatia's partnerships with third-party education providers at no cost.
                    </p>
                    <p>
                        We are actively seeking partnerships with many free and open online learning platforms.
                    </p>
                    <ul>
                        <li><a href="https://www.khanacademy.org/" target="_blank">Khan Academy for Primary and Secondary education.</a></li>
                        <li><a href="https://www.edx.org/" target="_blank">EdX for Tertiary and Vocational education.</a></li>
                        <li><a href="https://open.umn.edu/opentextbooks" target="_blank">Open Textbook Library for additional study.</a></li>
                        <li><a href="https://www.duolingo.com/" target="_blank">Duolingo for Second Language education.</a></li>
                    </ul>
                    <p>
                        For Education Affiliate Programs: <a href="mailto:gov@promatia.com">gov@promatia.com</a>
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
    padding 50px 20px
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
        font-size 1.2em
        font-weight 400
    .content
        max-width 800px
        align-items center
        margin auto
        position relative
        z-index 1

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
import web from '@/layouts/web'
import Rater from '@/components/Rater'
import buttonInput from '@/components/buttonInput'
import ChevronIcon from 'icons/ChevronRight'

export default {
    components: {
        web,
        Rater,
        buttonInput,
        ChevronIcon
    }
}
</script>
