import { createApp } from './app'

export default async context => {
    const { app, router } = createApp()

    $state.ENV = context.ENV

    // set router's location
    try {
        await router.push(context.url)
    } catch (error) {
        if(error !== undefined) throw error
    }
    //wait for router to be ready and resolve async components
    await new Promise((resolve, reject) => router.onReady(resolve, reject))

    const matchedComponents = router.getMatchedComponents()
    // no matched routes
    if (!matchedComponents.length) {
        throw { code: 404 }
    }

    context.state = $state

    return app
}