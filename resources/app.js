import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)
import router from '@/routes/vuerouter'
import '@/state'


export function createApp () {
    const app = new Vue({
        render: h => h('router-view'),
        router
    })

    return { app, router }
}
