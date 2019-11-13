let type = "in" || "out"

class User {
    static async getUser(_id){
        return await User.collection.findOne({_id: })
    }

    static resolvers = {
        async updateUser({input, ctx}){
            let { _id } = input

            let user = await User.collection.findOne({_id: })
        }
    }
}

//User.findOne({_id: ID}, { _id: 1, firstName: true, lastName: true }) https://docs.mongodb.com/manual/tutorial/project-fields-from-query-results/

//model.refresh()
//model.fresh()
//user.hasScope()

const resolvers = {
    Messages: {
        ...User.resolvers
    },
    Directives: {
        async UserContext(fields){
            fields.user = await getUser()

            return next()
        },
        /**
         * directiveArgs: { HasScope: ["updateProfile"] }
         * */
        async HasScope({fieldName, directiveArgs, user, next}){
            let { HasScope } = directiveArgs
            let scope = HasScope[0]

            if(user.HasScope(scope)) return await next()

            throw new Error(`User does not have scope: "${scope}" for field: ${fieldName}`)
        }
    }
}

class HasScope extends Directive {
    async resolver({fieldName, directiveArgs, user, next}){
        let { HasScope } = directiveArgs
        let scope = HasScope[0]

        if(user.HasScope(scope)) return await next()

        throw new Error(`User does not have scope: "${scope}" for field: ${fieldName}`)
    }

    introspector({introspectorField, directiveArgs }){
        let { HasScope } = directiveArgs
        let scope = HasScope[0]
        
        introspectorField["Requires Scope"] = `This field requires scope: "${scope}"`
    }
}

const typedef = gql`

type Messages
    updateUser(_id: ObjectID, ...UpdateUserInput) User

type UpdateUserInput ContextUser
    firstName String HasScope["updateProfile"]
    lastName String HasScope["updateProfile"]
    email String HasScope["updateProfile"] Lowercase Email

type User ContextUser
    id ObjectID
    firstName String HasScope["viewProfile"]
    lastName String HasScope["viewProfile"]
    fullName String HasScope["viewProfile"] Deprecated["Use firstName and lastName"]
`

const typedef2 = gql`

message createUser(_id: ObjectID, ...UpdateUserInput): User

input UpdateUserInput {
    _id: ObjectID!
    firstName: String! @hasScope(scope: "updateProfile")
    lastName: String! @hasScope(scope: "updateProfile")
    email: String! @lowercase @email @hasScope(scope: "updateProfile")
}

type User @contextUser {
    _id: ObjectID
    firstName: String @hasScope(scope: "viewProfile")
    lastName: String @hasScope(scope: "viewProfile")
    fullName: String @hasScope(scope: "viewProfile") @deprecated(reason: "Use firstName and lastName")
    friends: [User]
}

`

class User extends Directive {
    resolver(){

    }
    introspector(){
        introspectorField = fields.map(field => field.introspector)
    }
}

const User = {
    resolvers: [
        {
            name: "UserContext",
            args: {}
        }
    ],
    fields: {
        id: {
            resolvers: [
                {
                    name: "ObjectID",
                    args: {}
                }
            ]
        },
        firstName: {
            resolvers: [
                {
                    name: "String",
                    args: {}
                }, 
                {
                    name: "HasScope",
                    args: ["viewProfile"]
                }
            ]
        }
    }
}

let resolvers = [
    {
        name: "ObjectID",
        args: null
    }
]

graph(typedef, resolvers)


const x = {
    User: {
        fields: {
            firstName: {
                type: 'scalar',
                value: 'String',
                directives: ['haha'],
                args: {}
            },
            roles: {
                type: 'array',
                value: {
                    type: 'scalar',
                    value: 'String'
                }
            },
            friends: {
                type: 'paginator',
                nonNullable: true,
                directives: ['lol'],
                args: {},
                fields: {
                    models: {
                        type: 'array',
                        value: {
                            type: 'type',
                            fields: User.fields,
                            nonNullable: false
                        },
                        nonNullable: true
                    },
                    startCursor: {
                        type: 'ObjectID'
                    }
                }
            }
        }
    }
}