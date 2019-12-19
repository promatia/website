export { middleware as renderer } from './renderer.js'

export async function noWWW (ctx, next) {
    if(/^www\./.test(ctx.host)) {
        ctx.status = 301
        
        return ctx.redirect(`${ctx.protocol}://${ctx.host.replace(/^www\./, '')}${ctx.url}`)
    }
    await next()
}

export async function errorMiddleware (ctx, next) {
    try {
        await next()
    } catch (error) {
        console.error(error)
        ctx.status = error.status || 500
        ctx.body = error.message
    }
}

export async function redirectArkovia (ctx, next) {
    if(/^(www\.)?arkovia\.com/.test(ctx.host)) {
        ctx.status = 301
        
        return ctx.redirect(`${ctx.protocol}://${ENV.domain}${ctx.url}`)
    }
    await next()
}
