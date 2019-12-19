import { createApp } from './app'

Object.assign($state, __INITIAL_STATE__)

const { app, router } = createApp()

// wait until router has resolved all async before hooks and async components...
router.onReady(() => {app.$mount('#app') }, err => console.error(err))