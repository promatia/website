const Model = require('./model')

class User extends Model {
    static get collection(){
        return collection('users')
    }
    
    static types = `
    type User {
        firstName: String
    }

    message CreateUser (
        email: String!
        password: String!
        firstName: String!
        lastName: String!
        phone: String!
        referer: ObjectID
    ): Void
    `

    set password (value) {
        this.doc.password = bcrypt(value)
    }

    static async User ({ _id }, { wants }) {

    }
}