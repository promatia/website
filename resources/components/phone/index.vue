<template>
    <div class="vue-phone-number-input flex">
        <div class="select-country-container">
            <CountrySelector
                ref="CountrySelector"
                v-model="countryCode"
                :items="codesCountries"
                :preferred-countries="preferredCountries"
                :only-countries="onlyCountries"
                :ignored-countries="ignoredCountries"
                class="input-country-selector"
            />
        </div>
        <InputTel
            v-model="phoneNumber"
            name="Phone Number"
            :v="v"
            ref="phoneNumberInput"
            @focus="$emit('phone-number-focused')"
            @blur="$emit('phone-number-blur')"
        />
    </div>
</template>
<script>
/* eslint-disable */
import { countries, countriesIso } from "./phoneCodeCountries";
import InputTel from "./phoneinput";
import CountrySelector from "./country-selector";

const browserLocale = () => {
    if (!window) return null;
    const browserLocale =
        window.navigator.userLanguage || window.navigator.language;
    let locale = browserLocale
        ? browserLocale.substr(3, 4).toUpperCase()
        : null;
    if (locale === "") locale = browserLocale.substr(0, 2).toUpperCase();
    return locale;
};

const isCountryAvailable = locale => {
    return countriesIso.includes(locale);
};

export default {
    components: {
        InputTel,
        CountrySelector
    },
    props: {
        value: String,
        preferredCountries: { type: Array, default: [] },
        onlyCountries: { type: Array, default: null },
        ignoredCountries: { type: Array, default: Array },
        v: Object
    },
    data() {
        return {
            results: {
                phoneNumber: '',
            },
            inputFocused: false,
            userLocale: null
        }
    },
    computed: {
        codesCountries() {
            return countries
        },
        countryCode: {
            get() {
                return this.results.countryCode || this.userLocale
            },
            set(newCountry) {
                this.emitValues({
                    countryCode: newCountry,
                    phoneNumber: this.phoneNumber
                })
            }
        },
        phoneNumber: {
            get() {
                return this.value
            },
            set(newPhone) {
                this.emitValues({
                    countryCode: this.countryCode,
                    phoneNumber: newPhone.trim()
                })
            }
        }
    },
    async mounted() {
        try {
            this.fetchCountry
                ? this.fetchCountryCode()
                : !this.noUseBrowserLocale
                ? this.setLocale(browserLocale())
                : null;
        } catch (err) {
            console.error(err);
        }
    },
    methods: {
        emitValues({ countryCode, phoneNumber }) {
            let country = countries.find(
                country => country.iso2 === countryCode
            );
            let callingCode = country.dialCode;

            this.results = {
                countryCode: country.iso2,
                e164: `+${callingCode}${phoneNumber}`,
                callingCode,
                phoneNumber,
                hasNumber: !!phoneNumber && !!callingCode
            }

            this.$emit('phone', this.results)
            this.$emit('input', this.results.phoneNumber)
        },
        setLocale(locale) {
            const countryAvailable = isCountryAvailable(locale);
            if (countryAvailable && locale) {
                this.countryCode = locale;
            } else if (!countryAvailable && locale) {
                // If default country code is not available
                console.warn(`The locale ${locale} is not available`);
            }
            this.userLocale = countryAvailable ? locale : null;
        },
        async fetchCountryCode() {
            try {
                const response = await fetch("https://ip2c.org/s");
                const responseText = await response.text();
                const result = (responseText || "").toString();
                if (result && result[0] === "1")
                    this.setLocale(result.substr(2, 2));
            } catch (err) {
                console.error(err);
            }
        }
    }
};
</script>
<style lang="stylus" scoped>
.vue-phone-number-input {
    display: flex;
    padding 5px 0
}
</style>
