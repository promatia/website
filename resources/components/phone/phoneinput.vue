<template>
    <div class="input-container">
        <div
            @click="toggleFocus(true)"
            class="input"
            :class="{ 
            'focus': focus,
            'hasContent': !['', undefined, null].includes(this.inputValue),
            'error': v && v.$error}"
        >
            <input
                @blur="toggleFocus(false)"
                @focus="toggleFocus(true)"
                :type="type ? type : 'text'"
                ref="input"
                v-model="inputValue"
                :name="name || autocomplete"
                :id="name"
                :autocomplete="autocomplete"
                placeholder=""
            >
            <label
                class="label"
                :for="name"
            >{{ name }}</label>
        </div>
        <div
            v-if="helper || error && v && v.$error"
            class="helper"
            :class="{ error: v && v.$error }"
        >
            {{ v && v.$error ? error : helper }}
        </div>
    </div>
</template>
<script>
export default {
    props: ["type", "name", "value", "error", "v", "helper", "autocomplete"],
    data() {
        return {
            focus: false
        };
    },
    methods: {
        toggleFocus(val) {
            if (val === false && this.v) {
                this.v.$touch();
            }
            this.focus = val ? val : !this.focus;
            if (this.focus === true) {
                this.$refs.input.focus();
            }
        }
    },
    computed: {
        helperText() {
            if (this.v && this.v.$error) {
                return this.error ? this.error : this.helper;
            }
            this.helper ? this.helper : ''
        },
        inputValue: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    }
};
</script>
<style lang="stylus" scoped>
$mainControl = white

.input-container
    align-items center
    flex 1

.helper
    font-size 13px
    left 5px
    bottom -10px
    padding-top 4px
    padding-left 4px
    border-radius 3px
    color rgba(0, 0, 0, 0.75)
    &.error
        color: #ff2d2d;

.input
    caret-color: #2288ff
    position: relative
    flex 1
    input
        outline: 0;
        color: white;
        border: 0;
        margin: 0;
        width: 100%;
        font-size: 16px;
        background: rgba(255, 255, 255, 0.075);
        border-top-right-radius 4px
        border-bottom-right-radius 4px
        padding-left: 12px;
        padding-right: 12px;
        padding-top: 22px;
        padding-bottom: 6px;
        --webkit-appearance: none;
        appearance: none;

    .label
        font-size: 16px;
        position: absolute;
        top: 15px
        left: 0
        color: rgba(255, 255, 255, 0.75)
        padding-left: 12px
        transition: top 0.1s ease, font-size 0.1s linear
        cursor text
    &.hasContent
        .label
            font-size 13px
            top 6px
    &.focus
        .label
            color $mainControl
            font-size 13px
            top 6px
            padding-bottom 4px
    &.error
        caret-color #ff2d2d
        .label
            color #ff2d2d

input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active {
    background-color: transparent;
    -webkit-transition-delay: 10000s;
}
</style>