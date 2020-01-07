module.exports = async (ctx, next) => {
    if(/^(www\.)?arkovia\.com/.test(ctx.host)) {
        ctx.status = 301
        
        return ctx.redirect(`${ENV.domain}${ctx.url}`)
    }
    await next()
}
