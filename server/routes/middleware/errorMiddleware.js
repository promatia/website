
module.exports = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        console.error(error)
        ctx.status = error.status || 500
        ctx.body = error.message
    }
}