<template>
    <appminimal>
        <template slot="content">
            <div class="dialog-wrapper">
                <div class="dialog">
                    <div class="dialog-title">Sign Up</div>
                    <div class="dialog-contents">
                        <form class="dialog-inner">
                            <textInput
                                name="Email"
                                autocomplete="email"
                                v-model="user.email"
                                :v="$v.user.email"
                                ref="email"
                                />
                            <phoneInput
                                v-model="user.phoneNumber"
                                :preferredCountries="['AU', 'PO', 'NZ', 'US', 'GB']"
                                :v="$v.user.phoneNumber"
                                @phone="updatePhone"/>
                            <div class="grid-input">
                                <textInput
                                    name="First Name"
                                    autocomplete="name fname"
                                    :v="$v.user.firstName"
                                    v-model="user.firstName"
                                    />
                                <textInput
                                    name="Last Name"
                                    autocomplete="name lname"
                                    :v="$v.user.lastName"
                                    v-model="user.lastName"
                                    />
                            </div>
                            <textInput
                                name="Password"
                                type="password"
                                autocomplete="password"
                                :v="$v.user.password"
                                v-model="user.password"
                                />
                            <div class="button-wrapper">
                                <buttonInput
                                    class="button"
                                    text="Sign Up"
                                    @click="promise = signup()"
                                />
                            </div>
                            <div class="text-wrapper">
                                Already have an account? <router-link to="/sign-in">Sign In</router-link>
                            </div>
                        </form>
                    </div>
                    <overlayLoading v-if="promise"/>
                </div>
            </div>
        </template>
    </appminimal>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.text-wrapper
    margin 10px 0
    text-align center

.button-wrapper
    margin 5px 0
    display flex
    justify-content center

.dialog
    background mix($main, #1a1a1a, 8%)
    position relative
    margin 15px
    border-radius 8px
    max-width 600px
    width 100%
    display flex
    flex-direction column
    justify-content center
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

.dialog-wrapper
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
import appminimal from '@/layouts/appminimal'
import textInput from '@/components/textInput'
import overlayLoading from '@/components/overlayLoading'
import buttonInput from '@/components/buttonInput'
import { reactive, onMounted } from '@vue/composition-api'
import phoneInput from '@/components/phone'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import gql from '@/utils/graph'
import errorToString from '@/utils/errorToString'
import { setCookie, getCookie } from '@/utils/utils'
import promiser from '@/utils/promiser'

export default {
    mixins: [validationMixin],
    validations: {
        user: {
            email: {required},
            firstName: {required},
            lastName: {required},
            password: {required},
            phoneNumber: {required}
        }
    },
    setup (props, { refs, root }) {        
        const user = reactive({
            email: '',
            firstName: '',
            lastName: '',
            callingCode: '',
            phoneNumber: '',
            countryCode: '',
            password: '',
            referrer: undefined
        })

        let promise = promiser()
        
        onMounted(()=>{
            refs.email.$refs.input.focus()
        })
        
        async function signup () {
            user.referrer = getCookie('referrer')

            let { error: signupError } = await gql`message createUser(${user})` //create user api request

            if(!signupError) {
                const { email, password } = user
                // log in to the user just created
                let { data, error: loginError } = await gql`message loginUser(${{ email, password }})`

                if(!loginError) {
                    let { loginUser: token } = data
                    if(!token) return $state.createAlert('An unknown error occured', 'error')
                    
                    setCookie('token', token)
                    $state.ENV.token = token
                    $state.createAlert('Your registration was successful', 'success')
                    return root.$router.push('/app')
                }

                return $state.createAlert(errorToString(loginError), 'error')
            }

            $state.createAlert(errorToString(signupError), 'error')
        }

        return {
            user,
            updatePhone (val) {
                user.callingCode = val.callingCode
                user.phoneNumber = val.phoneNumber
                user.countryCode = val.countryCode
            },
            signup,
            promise
        }
    },
    components: {
        appminimal,
        textInput,
        buttonInput,
        phoneInput,
        overlayLoading
    }
}
</script>
