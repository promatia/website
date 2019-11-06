import Vue from 'vue'

function wrapObservable(obj){
    let observable = Vue.observable(obj)

    for(let i in observable){
        if(typeof observable[i] === 'object'){
            observable[i] = wrapObservable(observable[i])
        }
    }
    return new Proxy(observable, {
        set(target, prop, value){
            if(typeof value === 'object') value = wrapObservable(value)
            Vue.set(observable, prop, value)

            return true
        }
    })
}

global.$state = wrapObservable({})

Vue.prototype.$state = $state