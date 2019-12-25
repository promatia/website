<template>
    <app>
        <template slot="head"><slot name="head"/></template>
        <template slot="title">Dashboard</template>
        <template slot="content">
            <div class="welcome">
                <h1>Welcome {{ $state.user.firstName }}!</h1>
                <span>Thanks for registering</span>
            </div>
            <div class="referrals">
                <div class="referral-box">
                    <h2>User Referrals</h2>
                    <div class="big-number">
                        {{ $state.user.userReferralCount }} Users
                    </div>
                    <h3>Invite Link</h3>
                    <div class="fake-input" @click="copyInviteLink">
                        <div class="copy">Copy</div><input ref="inviteLink" :value="`https://promatia.com/start?referrer=${ $state.user._id }`"/></div>
                </div>
            </div>
        </template>
    </app>
</template>
<style lang="stylus" scoped>
@import "~@/stylus/variables"

.welcome
    padding 30px 20px
    text-align center
    h1
        font-size 2.5em
        margin-bottom 10px
    span 
        font-size 18px

.referral-box
    padding 25px
    border-radius 10px
    max-width 350px
    width 100%
    background linear-gradient(90deg, #2D4C88, #125151)
    h2
        margin 0
        font-weight 400
    h3
        margin 0
    .big-number
        font-size 3em
        font-weight 500

.fake-input
    background rgba(0,0,0,0.3)
    border-radius 5px
    
    margin-top 10px
    display grid
    overflow hidden
    grid-template-columns max-content 1fr
    grid-gap 10px
    white-space nowrap
    input
        padding 15px
        background none 
        padding-left 0
        border none
        color white
    .copy
        padding 15px
        padding-right none
        font-weight 500
        color lighten($main, 20%)
        cursor pointer

.referrals
    display flex
    justify-content center

</style>
<script>
import app from '@/layouts/app'

export default {
    setup (props, { refs }) {
        return {
            copyInviteLink () {
                refs.inviteLink.focus()
                refs.inviteLink.select()
                try {
                    document.execCommand('copy')
                    $state.createAlert('Copied invite link', 'success')
                } catch (error) {
                    $state.createAlert('Could not copy invite link, start sharing!', 'error')
                }
            }
        }
    },
    components: {
        app
    }
}
</script>
