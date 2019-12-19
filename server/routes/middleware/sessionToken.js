import { User } from '../../models/user.js'
import jsonwebtoken from 'jsonwebtoken'

const { JsonWebTokenError } = jsonwebtoken

export default async (ctx, next) => {
    let token = null
    if(ctx.header.token) {
        token = ctx.header.token
    }
    if(ctx.cookie && ctx.cookie.token) {
        token = ctx.cookie.token
    }
    
    if(token) {
        try {
            let user = await User.authenticate(token, ctx)
            if(user) {
                ctx.state.token = token
                ctx.state.user = user
            }
        } catch (error) {
            if(error instanceof JsonWebTokenError) return ctx.cookies.set('token', '')
            throw error
        }
    }
    await next()
}
