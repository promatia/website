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
                <h1 class="big-text">
                    
                </h1>
                <p>
                    Promatia is a new country project located in the continent of Australia, bordering the coast of the Gulf of Carpentaria. The project was first invisioned in November of 1999 as has maintained stable workflow since. After 20 years of hard work, we have pulled back the curtains on the project in order to promote a more public image.
                </p>
                <p>
                    Promatia is a project that aims to construct a peaceful and co-operative self-governing body a the most remote part of the Australian continent through building of scalable infrastructure. It is a collection of bright minds from a new generation with the expressed goal of establishing a technologically innovative, and environmentally sustainable platform for transparent and direct democracy. Promatia provides open and democratic architecture of digital governance. A place where any citizen can contribute to the rule of law.
                </p>
                <p>
                    Our project aims to create a national identity and place of belonging for intelligent, innovative, and inquisitive minds. Giving people a chance to express their creativity and educate themselves. It strives to become a community of simplicity. From a simple majority voting structure, to expectable rates in the application of our tax system, to clear and concise legal language.
                </p>
                <p>
                    It is important to Promatia that its people feel free from the threat of corruption. Promatia has been founded by a like mineded group of people wary of the condition of many of the world's governments. We see them as influenced by corporate interests and extra-national interference. Promatia wishes to become a place where people have the power to change their own policy, and make and enforce that policy in real time.
                </p>
                <p>
                    Promatia is not a hoax, not a prank, and not a teenage dream. We are a collaboration of like minded individuals from around the globe with knowledge in diverse fields ranging from information security and public key cryptography, architectural design and city planing, and machine learning.
                </p>
                <h1 class="big-text">
                    Skills
                </h1>
                <p>
                    The Promatian government recruits as many interested people as possible to maintain a high baseline of manpower in order to make our its dream a reality. We look for specialists in their field, so that the can use their skills for the purpose of building a better world. Here is a short list of the kind skill Promatia recruits for, and why they part of creating and executing the Promatian vision.
                </p>
                <ul>
                    <li><b>App Development:</b> Promatia has the experience to develop web applications accessible to every individual, even those outside of the nation, to conduct business transactions with its digital currency in a seamless fashion.</li><br>
                    <li><b>Computer-Aided Design:</b> Our government employees have the skills to organize cities, buildings, infrastructure, inventions, as well as other designs using computer aided design and graphic design software. A breath of fresh air for people tired of archaic paper forms, and walls of black and white when taxes come around.</li><br>
                    <li><b>Rapid Prototyping:</b> Promatia streamlines every part of its organizational hierarchy. Gone are the days of waiting years for changes to come. Expertise with powerful and premium tools in the design industry, allow our government to rapidly prototype new applications and features in the digital workspace for the progress of digital governance.</li><br>
                    <li><b>Machine Learning:</b> We specialize in the development of powerful machine learning models, artificial intelligence, and deep neural networks at the bleeding edge of technology. Our research helps get to the core of what the citizenship really needs, and how the government can best deliver on its promises. Promatia seeks to automate as much of the governmental process as possible, to allow its employees to focus more closely on the problems of individuals.</li>
                </ul>
            </div>
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
        max-width $tabletWidth
        margin auto
        position relative
        z-index 1

.subtitle
    font-weight 500
    font-size 1.2em

.big-text
    margin 0

.wrapper
    padding 40px 40px
    max-width 800px
    margin auto
    background #ffffff

</style>
<script>
import web from '@/layouts/web'

export default {
    components: {
        web
    }
}
</script>
