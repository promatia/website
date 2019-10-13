const Graph = require('./graph')

const typedefs = `

message UpdateUser(
    _id ObjectID
    firstName HasScope(scope "updateProfile") String 
    lastName HasScope(scope "updateProfile") String 
    email HasScope(scope "updateProfile") String Lowercase Email
) contextUser User

type User contextUser {
    _id ObjectID
    firstName HasScope(scope "updateProfile") String
    lastName HasScope(scope "updateProfile") String
    fullName HasScope(scope "updateProfile") String Deprecated(reason "Use firstName and lastName")
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