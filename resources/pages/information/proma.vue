<template>
    <web>
        <template slot="title">Proma</template>
        <template slot="content">
            <div class="hero-header">
                <div class="content">
                    <h1 itemprop="name">Monetary System</h1>
                    <hr>
                    <div class="subtitle" itemprop="description">
                        The Proma is Promatia's digital currency.
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <div class="inner-page">
                    <p>
                        The Government of Promatia and its citizens have the opportunity to participate in Promatia's unique monetary system. The currency of Promatia, the Proma, is a centralized digital currency operated by and distributed from PromaBank; the central bank of Promatia. This bank is a single access point for all transactions that occur between citizens exchanging Proma from the goods and services they use every day.
                    </p>
                    <p>
                        The Proma uses a made for purpose digital implementation of chain double-entry bookkeeping, where all transactions are recorded for citizen accounts. This enables us to use financial data for powerful applications; such as automatic taxation, logistics tracking for high demand consumer goods, and meticulous record-keeping for citizens to take advantage of to resolve disputes.
                    </p>
                    <p>
                        The digital ledger platform that the PromaBank operates allows gives the Promatian government the flexibility to automatically tax citizens at point-of-sale terminals. This means that citizens do not have to file complicated and exhausting yearly tax forms. Instead, taxes are charged on transactions using the Proma currency each time a purchase of a good or service is made. When this tax is paid, the currency is automatically destroyed, increasing government expensive overhead and reducing inflation.
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
