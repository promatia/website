<template>
    <web>
        <template slot="title">Values</template>
        <template slot="content">
            <div class="hero-header">
                <div class="content">
                    <h1 itemprop="name">Promatian Values</h1>
                    <hr>
                    <div class="subtitle" itemprop="description">
                        Promatia has a detailed vision of the future.
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="inner-page">
                    <p>
                        Promatia is a social experiment to establish a new <a href="https://en.wikipedia.org/wiki/Special_economic_zone"><strong>Special Economic Zone (SEZ)</strong></a> in northern Australia. A special economic zone is a city with it's own autonomous government, enabling more experimental policies to be used. This means our city will be able to revolutionise the way we deal with government, in areas ranging from education, healthcare, currency and banking, law-making and much more.
                    </p>
                    <p>
                        Promatia is a project that aims to construct a peaceful and co-operative self-governing body in an uninhabited part of nothern Australia. Our project is establishing a city with scalable infrastructure that will enable it to grow rapidly. It is a collection of bright minds with the goal of establishing a technologically innovative, and environmentally sustainable city, with full transparency and citizen involvement. Promatia provides open and democratic architecture of digital governance. A place where any citizen can contribute to the rule of law.
                    </p>
                    <p>

                        People in Promatia shall feel free from the threat of corruption. That includes foreign interference, and protection from interference from corporate interests. Promatia is the place where people have the power to influence policy, make an impact and change lives.
                    </p>
                    <p>
                        Our project is looking for people that want to make an impact with their skills, no matter what they are. We're always looking for new citizens with useful skills, resources and knowledge.
                    </p>
                    <p>
                        <buttonInput class="button" to="/start"><ChevronIcon/>Become A Citizen</buttonInput>
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
