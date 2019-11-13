const Graph = require('./graph')
const API = require('./api')

const schema = `
scalar ObjectID

directive deprecated INPUT FIELD OBJECT
directive isAuthenticated INPUT FIELD OBJECT
directive hasScope(scope: String) INPUT FIELD OBJECT
directive lowercase INPUT FIELD
directive email INPUT

type PaginationInput {
    limit: Number
    after: ObjectID
    before: ObjectID
}

paginator Paginate {
    startCursor: ObjectID
    endCursor: ObjectID
    nextPage: Boolean
    previousPage: Boolean
}

message UpdateUser (
    _id: ObjectID
    firstName: String
    lastName: String
    email: String @lowercase @email
): User @hasScope(scope: "updateProfile")

message User (_id: ObjectID): User @hasScope(scope: "viewProfile") 

message Me: User @isAuthenticated

type User {
    _id: ObjectID
    firstName: String
    lastName: String
    email: String
    roles: [String]
    fullName: String @deprecated(reason: "Use firstName and lastName")
    friends(test: ObjectID, ...PaginationInput): Paginate[User]
    citizenshipData: CitizenshipData
    sessions(...PaginationInput): Paginate[Session]
}

type CitizenshipData {
    accepted: Number
}

`

const messageResolvers = {
    async UpdateUser({}){

    }
}

const directiveResolvers = {
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

let graph = API(new Graph({
    schema,
    messageResolvers,
    directiveResolvers,
}))



async function main(){
    let msg = {
        _id: "123",
        firstName: "Bill",
        friends: {
            test: 1
        }
    }

    await graph`
        message updateUser (${msg}) {
            _id
            firstName
            roles
            friends(limit: 5) {
                items {
                    firstName
                }
            }
        }
    `
}

main().catch((err)=> {
    console.error(err)
})