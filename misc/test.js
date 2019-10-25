const Graph = require('./graph')

`
message UpdateUser(...UpdateUserInput): User

input UpdateUserInput {
    _id ObjectID
    firstName String @hasScope(scope: "updateProfile")
    lastName String @hasScope(scope: "updateProfile")
    email String @lowercase @email @hasScope(scope: "updateProfile")
}

type User @contextUser {
    _id ObjectID
    firstName String @hasScope(scope: "viewProfile")
    lastName String @hasScope(scope: "viewProfile")
    fullName String @hasScope(scope: "viewProfile") @deprecated(reason: "Use firstName and lastName")
    friends [User]
}
`

const typedefs = `

message UpdateUser (
    _id ObjectID
    firstName HasScope(scope "updateProfile") String 
    lastName HasScope(scope "updateProfile") String 
    email HasScope(scope "updateProfile") String Lowercase Email
) contextUser User

type User contextUser {
    _id ObjectID
    firstName HasScope(scope "viewProfile") String
    lastName HasScope(scope "viewProfile") String
    fullName HasScope(scope "viewProfile") String Deprecated(reason "Use firstName and lastName")
    friends [User]
}
`

const resolvers = {
    async UpdateUser({}){

    }
}

const directives = {
    HasScope: class {
        fieldResolver({fieldName, User}){
            return true
        }

        inputResolver({inputValue}){

        }

        introspector(){

        }
    }
}

let graph = new Graph(typedefs, resolvers, directives)

graph(`
message UpdateUser(
    _id "284929482"
    firstName "Dominus"
    lastName {
        test "lala"
    }
){
    firstName
    lastName
}
`)