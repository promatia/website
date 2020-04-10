<template>
    <web>
        <template slot="title">Media</template>
        <template slot="content">
            <div class="wrapper">
                <h1 class="big-text">
                    Education
                </h1>
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
        </template>
    </web>
</template>
<style lang="stylus" scoped>
.subtitle
    font-weight 500
    font-size 1.2em
.big-text
    margin 0

.wrapper
    padding 80px 40px
    max-width: 1000px
    margin: auto

</style>
<script>
import web from "@/layouts/web"

export default {
    components: {
        web
    }
}
</script>
