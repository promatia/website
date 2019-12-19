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

directive isAuthenticated INPUT FIELD OBJECT
directive hasScope(scope: String!) INPUT FIELD OBJECT
directive lowercase INPUT
directive max INPUT

${models.map(model => model.types).join('\n')}
`

const messageResolvers = {
    createUser: User.createUser,
    loginUser: User.loginUser
}

let graph = new Builder({schema, messageResolvers, directiveResolvers, scalarResolvers})

export { graph, models }
