<template>
    <div
        :class="{
            'selected': value === country.iso2,
            'keyboard-selected': value !== country.iso2
        }"
        class="country"
        @click.stop="$emit('input', country.iso2)"
    >
        <div class="country-data-flag">
            <div :class="`iti-flag ${country.iso2.toLowerCase()}`"/>
        </div>
        <span class="country-name">{{ country.name }}</span>
        <span class="country-code">+{{ country.dialCode }}</span>
    </div>
</template>
<script>
export default {
    props: ['country', 'value']
}
</script>
<style lang="stylus" scoped>

.country
    display grid
    grid-template-columns max-content 1fr max-content
    grid-gap 10px
    align-items center
    padding 6px 10px
    cursor pointer
    &:hover
        background rgba(255,255,255,0.05)
    &.selected
        background rgba(255,255,255,0.1)
    .country-name
        font-weight 600
        font-size 12px
    .country-code
        font-size 17px
</style>