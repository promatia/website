<template>
    <header class="app-header">
        <div class="title"><slot name="title"/></div>
        <div class="profile-area">
            <div class="profile-img-wrapper" :class="{ active: userMenuToggled }" @click="toggleUserMenu">
                <img class="profile-image" :src="$state.user.displayPicture"/>
            </div>
        </div>
        <div class="user-menu" v-if="userMenuToggled">
            <div class="dialog-profile-grid">
                <div class="profile-img">
                    <img class="profile-image" :src="$state.user.displayPicture"/>
                </div>
                <div class="dialog-profile-info">
                    <div class="name">{{ $state.user.firstName }} {{ $state.user.lastName }}</div>
                    <div class="email">{{ $state.user.email }}</div>
                </div>
            </div>
            <div class="logout" @click="promise = logout()">
                Log Out
            </div>
            <overlayLoading v-if="promise"/>
        </div>
    </header>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.app-header
    grid-area header
    display grid
    grid-template-columns auto 1fr
    position relative

.profile-area
    justify-self flex-end
    align-self center
    padding-right 20px

.profile-img
    display inline-flex
    border-radius 50px

.profile-img-wrapper
    border 4px solid transparent
    border-radius 50px
    cursor pointer
    display inline-flex
    &:hover, &.active
        border 4px solid rgba(255, 255, 255, 0.25)

.dialog-profile-grid
    display grid 
    grid-gap 10px
    padding 20px
    grid-template-columns max-content 1fr
    .dialog-profile-info
        .name
            font-weight 600
            font-size 17px

.user-menu
    position absolute
    top 60px
    right 0
    background $dialogColor
    max-width 400px
    width 100%
    box-shadow 0 0 10px rgba(0,0,0,0.75)
    border-bottom-left-radius 10px
    overflow hidden
    .logout
        font-size 17px
        font-weight 500
        cursor pointer
        color #f44
        padding 10px 20px
        text-align center

img.profile-image
    width 36px
    height 36px
    border-radius 30px

.title
    font-size 20px
    font-weight 500
    display flex
    align-items center
    padding-left 20px
</style>
<script>
import { ref } from '@vue/composition-api'
import promiser from '@/utils/promiser'
import overlayLoading from '@/components/overlayLoading'
import graph from '@/utils/graph'
import errToStr from '@/utils/errorToString'
import { setCookie } from '@/utils/utils'

export default {
    components: {
        overlayLoading
    },
    setup (props, { root }) {
        let userMenuToggled = ref(false)
        let promise = promiser()

        return {
            userMenuToggled,
            promise,
            toggleUserMenu () {
                userMenuToggled.value = !userMenuToggled.value
            },
            async logout () {
                let msg = {
                    token: $state.ENV.token
                }

                let { error, data } = await graph`message deleteToken(${msg})`

                if(error) return $state.createAlert(errToStr(error), 'error')

                let { deleteToken: succeeded } = data

                if(!succeeded) $state.createAlert('Could not delete user token', 'error')

                setCookie('token', '') // remove token cookie
                $state.user = null // set the user to null

                root.$router.push('/sign-in')
            }
        }
    }
}
</script>
