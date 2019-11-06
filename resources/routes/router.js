import Vue from "vue"
import VueRouter from "vue-router"
import { prefix, meta } from "@/utils/routingUtils"
//import { inputify, gqlReq } from "@/utils/grapher"

Vue.use(VueRouter)

let routes = [
    { path: "/", component: () => import('@/pages/home') },
    { path: '/*', component: () => import('@/templates/error')} //404
]

const router = new VueRouter({
    mode: "history",
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes
})

//check if state has been set before
//so client-side routing state isn't replaced with outdated state on every route change
let setState = false

router.beforeEach((to, from, next)=>{
    if(!router.app.$isServer && !setState){
        // prime the store with server-initialized state.
        // the state is determined during SSR and inlined in the page markup.
        if (window.__INITIAL_ROOTSTATE__) {
            Object.assign($state, window.__INITIAL_ROOTSTATE__)
            setState = true
        }
    }

    next()
})

export default router