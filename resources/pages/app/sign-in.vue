<template>
    <appminimal>
        <template slot="content">
            <div class="dialog-wrapper">
                <div class="dialog">
                    <div class="dialog-title">Sign In</div>
                    <div class="dialog-contents">
                        <form class="dialog-inner">
                            <textInput
                                name="Email"
                                autocomplete="email"
                                v-model="user.email"
                                :v="$v.user.email"
                                ref="email"
                                />
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
                                    text="Sign In"
                                    @click="promise = signin()"
                                />
                            </div>
                            <div class="text-wrapper">
                                Don't have an account? <router-link to="/sign-up">Sign Up</router-link>
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
    margin 15px
    border-radius 8px
    position relative
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

</style>
<script>
import appminimal from '@/layouts/appminimal'
import textInput from '@/components/textInput'
import buttonInput from '@/components/buttonInput'
import { reactive, onMounted } from '@vue/composition-api'
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import graph from '@/utils/graph'
import errorToString from '@/utils/errorToString'
import { setCookie } from '@/utils/utils'
import overlayLoading from '@/components/overlayLoading'
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
    components: {
        appminimal,
        textInput,
        buttonInput,
        overlayLoading
    },
    setup (props, { refs, root }) {
        const user = reactive({
            email: '',
            password: ''
        })
        
        onMounted(()=>{
            refs.email.$refs.input.focus()
        })
        
        async function signin () {
            let { data, error } = await graph`message loginUser(${user})`

            if(error) return $state.createAlert(errorToString(error), 'error')
            
            let { loginUser: token } = data

            if(!token) return $state.createAlert('An unknown error occured, could not create user token', 'error')
            
            setCookie('token', token)
            $state.ENV.token = token

            return root.$router.push('/app')
        }

        return {
            user,
            signin,
            promise: promiser()
        }
    }
}
</script>
