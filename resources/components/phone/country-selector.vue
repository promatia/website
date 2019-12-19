<template>
    <div
        ref="parent"
        class="country-selector-tool"
        v-click-outside="closeList"
        @click.prevent="toggleList"
        tabindex="0"
        @focus="isFocus = true"
        @blur="isFocus = false">
        <div 
            class="country-selector">
            <div>
                <label
                    ref="label"
                    class="country-title">
                    Choose Country
                </label>
                <div class="country-data">
                    <div v-if="value" class="country-data-flag">
                        <div :class="`iti-flag ${value.toLowerCase()}`"/>
                    </div>
                    <label class="country-data-label">{{ callingCode }}</label>
                </div>
            </div>
            <ChevronDown :size="30"/>
        </div>
        <div
            v-show="hasListOpen || isFocus"
            ref="countriesList"
            class="country-list">
            <div class="preferred" v-if="countriesPreferred">
                <country
                    v-for="item in countriesPreferred"
                    :key="item.code"
                    :country="item"
                    :value="value"
                    @input="updateValue"/>
            </div>
            
            <country
                v-for="item in countriesSorted"
                :key="item.code"
                :country="item"
                :value="value"
                @input="updateValue"/>
        </div>
    </div>
</template>

<script>
import { directive } from "v-click-outside"
import ChevronDown from "icons/ChevronDown"
import country from './country'

export default {
    directives: {
        clickOutside: directive
    },
    components: {
        ChevronDown,
        country
    },
    props: {
        value: { type: [String, Object], default: null },
        preferredCountries: { type: Array, default: [] },
        onlyCountries: { type: Array, default: [] },
        items: { type: Array, required: true },
        ignoredCountries: { type: Array, default: [] }
    },
    data() {
        return {
            isFocus: false,
            hasListOpen: false,
            selectedIndex: null,
            query: ""
        };
    },
    computed: {
        countriesList() {
            return this.items.filter(
                item => !this.ignoredCountries.includes(item.iso2)
            )
        },
        countriesPreferred() {
            const countries = this.preferredCountries

            return countries.map(country => this.countriesList.find(item => item.iso2 === country))
        },
        countriesSorted() {
            return this.countriesList.sort((a,b)=> a.dialCode - b.dialCode)
        },
        selectedCountryIndex() {
            return this.value
                ? this.countriesSorted.findIndex(c => c.iso2 === this.value)
                : null
        },
        callingCode() {
            let country = this.countriesList.find(country => country.iso2 === this.value)
            if(country) return '+' + country.dialCode
        }
    },
    mounted() {
        this.$parent.$on("phone-number-focused", this.closeList)
    },
    methods: {
        toggleList() {
            this.hasListOpen ? this.closeList() : this.openList()
        },
        openList() {
            this.isFocus = true
            this.hasListOpen = true
        },
        closeList() {
            if (this.hasListOpen === true) {
                this.isFocus = false
                this.hasListOpen = false
            }

        },
        updateValue(iso2) {
            this.closeList()
            this.isFocus = false
            this.$emit("input", iso2)
        }
    }
};
</script>
<style lang="stylus">
@import './flags.css'

.iti-flag
    background-image: url('./flags.png')

.country-data-label
    font-size 17px
    padding-left 5px
    padding-right 5px

.country-data-flag
    zoom 0.8

</style>
<style lang="stylus" scoped>

.country-selector-tool
    font-family: 'Roboto'
    margin-right 1px

.material-design-icon
    display flex

.chevron-down-icon
    margin-left 4px

.country-selector
    border-top-left-radius 4px
    border-bottom-left-radius 4px
    position relative
    display flex
    align-items center
    &.opened
        border-bottom-left-radius 0px
    padding 2px
    height 46px
    padding-left 6px
    background rgba(255,255,255,0.075)
    .country-data
        display flex
        align-items center
    .country-title
        font-size 13px
        padding-bottom 3px
        color rgba(255,255,255,0.75)

.country-list
    position absolute
    z-index 1
    background #111
    max-height 300px
    overflow-y scroll

.preferred
    border-bottom 2px solid rgba(255,255,255,0.1)

</style>