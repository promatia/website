import Vue from 'vue'

function wrapObservable (obj) {
    let observable = Vue.observable(obj)

    for(let i in observable) {
        if(typeof observable[i] === 'object' && observable[i] !== null) {
            observable[i] = wrapObservable(observable[i])
        }
    }
    return new Proxy(observable, {
        set (target, prop, value) {
            if(typeof value === 'object' && value !== null) value = wrapObservable(value)
            Vue.set(target, prop, value)

            return true
        }
    })
}

global.$state = wrapObservable({
    messages: [],
    createAlert (message, type) {
        $state.messages.push({
            id: new Date().getTime() + Math.fround(Math.random() * 100),
            text: message,
            type: type
        })
    }
})

Vue.prototype.$state = $state
