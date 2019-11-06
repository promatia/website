module.exports = async (ctx, next) => {
    if(/^www\./.test(ctx.host)){
        return ctx.redirect(ctx.protocol + ctx.host.replace(/^www\./, '') + ctx.url)
    }
    await next()
}