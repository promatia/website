import Vue from 'vue'
import VueRouter from 'vue-router'
import { group } from '@/utils/routingUtils'
import graph from '@/utils/graph'
import errorToString from '@/utils/errorToString'

Vue.use(VueRouter)

let routes = [
    { path: '/', component: () => import('@/pages/home') },
    { path: '/sign-up', component: () => import('@/pages/app/sign-up')},
    { path: '/sign-in', component: () => import('@/pages/app/sign-in')},
    { path: '/start', component: () => import('@/pages/start') },
    ...group('/app', {auth: true}, [
        { path: '/', component: () => import('@/pages/app/dashboard')}
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
