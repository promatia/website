<template>
    <appminimal>
        <template slot="content">
            <div class="wrapper">
                <div class="dialog">
                    <div class="dialog-title">Sign Up</div>
                    <div class="dialog-contents">
                        <div class="dialog-inner">
                            <textInput
                                name="Email"
                                v-model="user.email"
                                />
                            <div class="grid-input">
                                <textInput
                                    name="First Name"
                                    autocomplete="fname"
                                    v-model="user.firstName"
                                    />
                                <textInput
                                    name="Last Name"
                                    autocomplete="lname"
                                    v-model="user.lastName"
                                    />
                            </div>
                            <textInput
                                name="Password"
                                type="password"
                                v-model="user.password"
                                />
                            <div class="button-wrapper">
                                <buttonInput
                                    text="Sign Up"
                                    />
                            </div>
                            <div class="text-wrapper">
                                Already have an account? <a href="">Sign In</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </appminimal>
</template>
<style lang="stylus">
@import "~@/stylus/variables"

.text-wrapper
    margin 10px 0
    text-align center

.button-wrapper
    margin 5px 0
    display flex
    justify-content center

.dialog
    background mix($main, #222, 10%)
    max-width 600px
    width 100%
    margin 5px 0
    display flex
    flex-direction column
    justify-content center

.dialog
    background mix($main, #222, 10%)
    max-width 600px
    width 100%
    margin 5px 0
    display flex
    justify-content center

.dialog
    background mix($main, #222, 10%)
    max-width 600px
    width 100%
    margin 20px
    border-radius 8px
    .dialog-title
        padding 15px
        font-size 20px
        font-weight 500
        background darken($main, 10%)
        text-align center
        border-top-left-radius 8px
        border-top-right-radius 8px
    .dialog-contents
        padding 20px
    .dialog-inner
        max-width 360px
        width 100%
        margin auto

.wrapper
    display flex
    align-items center
    flex 1
    justify-content center

.grid-input
    display grid
    grid-template-columns 1fr 1fr
    grid-gap 10px

</style>
<script>
import appminimal from "@/layouts/appminimal"
import textInput from "@/components/textInput"
import buttonInput from "@/components/buttonInput"
import { reactive } from "@vue/composition-api"

export default {
    setup(){
        const user = reactive({
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: ''
        })

        return {
            user
        }
    },
    components: {
        appminimal,
        textInput,
        buttonInput
    }
}
</script>