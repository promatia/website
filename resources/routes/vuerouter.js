import Vue from 'vue'
import VueRouter from 'vue-router'
import { group } from '@/utils/routingUtils'
import graph from '@/utils/graph'
import errorToString from '@/utils/errorToString'

Vue.use(VueRouter)

let routes = [
    { path: '/', component: () => import('@/pages/home')},
    { path: '/sign-up', component: () => import('@/pages/app/sign-up')},
    { path: '/sign-in', component: () => import('@/pages/app/sign-in')},
    { path: '/start', component: () => import('@/pages/start')},
    { path: '/information', component: () => import('@/pages/information')},
    ...group('/app', {auth: true}, [
        { path: '/', component: () => import('@/pages/app/dashboard')}
    ]),
    ...group('/information', [
        { path: '/media', component: () => import('@/pages/information/media')},
        { path: '/values', component: () => import('@/pages/information/values')},
        { path: '/government', component: () => import('@/pages/information/government')},
    ]),
    { path: '/*', component: () => import('@/templates/error')} //404
]

const router = new VueRouter({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes
})

router.beforeEach(async (to, from, next) => {
    if(!$state.user && to.matched.some(route => route.meta.auth)) {
        let { data, error } = await graph`
        message me {
            _id
            firstName
            lastName
            email
            displayPicture
            userReferralCount
        }`

        if(error) {
            if(!router.app.$isServer) $state.createAlert(errorToString(error), 'error')
            return next('/sign-in')
        }
        
        $state.user = data.me
    }

    next()
})

export default router
