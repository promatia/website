<template>
    <web>
        <template slot="title">Government</template>
        <template slot="content">
            <div class="hero-header">
                <div class="content">
                    <h1 itemprop="name">Our Government</h1>
                    <hr>
                    <div class="subtitle" itemprop="description">
                        With the power that a direct democracy enables.
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="inner-page">
                    <p>
                        Promatia is a direct democracy, a system of government where citizens are directly responsible for voting on legislation, for it to be passed into law. Promatia is not a representative democracy, a system where citizens vote on others to pass laws for them. Instead, citizens of Promatia make up a house called the Assembly, which may draft or pass legislation by popular vote.
                    </p>
                    <p>
                        These citizens also elect Ministers, who lead government Ministries. These Ministers are the ruling body over their ministry and act as a chief executive overseeing its operation. Ministers have no term length. Voting is instantaneous and continuous, and impact results in real time. If a minister loses their controlling share of votes, their position is automatically transferred to the new minister.
                    </p>
                    <p>
                        Laws are passed by voting in a similar way. The difference is that votes for legislation have a static one month time period for votes to accumulate. Votes for law proposals are made public after this one month period. Votes for legislation are anonymous and confidential. But citizens may engage with a public forum for each legislation proposal.
                    </p>
                    <p>
                        Citizens may create new ministries by proposing <em>enacting</em> legislation, that establishes that ministry, it's positions and governing structure.
                    </p>
                    <p>
                        Ministers may propose laws without petition, as it is a minister's job to propose and improve legislation to reduce the amount of unnecessary red tape, while improving effectiveness. This accelerates the speed at which the government can respond to any situation. Promatia's government operation will be expedient, efficient, and accurate.
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
