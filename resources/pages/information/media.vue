<template>
    <web>
        <template slot="title">Media</template>
        <template slot="content">
            <div class="hero-header">
                <div class="content">
                    <h1 itemprop="name">Media &amp; Press</h1>
                    <hr>
                    <div class="subtitle" itemprop="description">
                        For Media or Press Contact: <a href="mailto:gov@promatia.com">gov@promatia.com</a>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="inner-page">
                    <p>
                        Promatia will take correspondence from any interested reputable agency. If you wish to maintain long to contact with the government of Promatia, please supply your name, telephone number, and preferred contact time including your time zone. This is for us to reach out to you for media correspondence at a time easy to reach you.
                    </p>
                    <p>
                        The Government of Promatia will make an effort to respond to submitted requests within 24 to 48 hours via email. Please keep in mind, due to a high volume of contact requests, that more time may be necessary to respond to you via email. For this reason we ask in addition to your email request you supply relevant contact information, especially for inquiries or questions.
                    </p>
                    <p>
                        If you are an employee of a reputable media company or organization, you can expedite this process by clearly identifying the company of your employ in the subject line your email.
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
    a
        color white
        text-decoration underline
    a:hover
        text-decoration none
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
