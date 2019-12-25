import { User } from './user.js'
import { Builder } from '@promatia/prograph'
import { directiveResolvers, scalarResolvers } from './utils.js'

const models = [User]

const schema = `
scalar ObjectID
scalar Date
scalar Void

type PaginationInput {
    limit: Number @max(amount: 50)
    after: ObjectID
    before: ObjectID
}

paginator CursorPaginator {
    startCursor: ObjectID
    endCursor: ObjectID
    nextPage: Boolean
    previousPage: Boolean
}

directive authenticated INPUT FIELD OBJECT
directive hasScope(scope: String!) INPUT FIELD OBJECT
directive lowercase INPUT
directive max INPUT

${models.map(model => model.types).join('\n')}
`

const messageResolvers = {
    createUser: User.createUser,
    loginUser: User.loginUser,
    me: User.me,
    deleteToken: User.deleteToken
}

let graph = new Builder({schema, messageResolvers, directiveResolvers, scalarResolvers})

export async function graphMiddleware (ctx) {
    let query = ctx.request.body.query
    try {
        ctx.body = {
            data: await graph(query, { context: ctx })
        }
    } catch (error) {
        ctx.body = {
            data: null,
            error: {
                message: error.message,
                location: error.location
            }
        }
    }
}

export { graph, models }
