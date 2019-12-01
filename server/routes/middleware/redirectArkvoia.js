module.exports = async (ctx, next) => {
    if(/^(www\.)?arkovia\.com/.test(ctx.host)){
        ctx.status = 301
        
        return ctx.redirect(`${ctx.protocol}://${ENV.domain}${ctx.url}`)
    }
    await next()
}