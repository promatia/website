import { Model, collection } from './model.js'
import { gql } from '@promatia/prograph'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongodb from 'mongodb'
import { generateDisplayPicture } from '../utils/displayPicture.js'

const { ObjectID } = mongodb

/**
 * @extends Model
 */
export class User extends Model {
    static get collection () {
        return collection('users')
    }

    static types = gql`

    type Email {
        email: String
        verified: Boolean
    }

    type User {
        _id: ObjectID
        email: String # gets first email in emails array
        emails: [Email]
        firstName: String
        lastName: String
        displayPicture: String
        e164: String # International format phone number
        phoneNumber: String # Phone number without calling code
        callingCode: String # Phone number calling code
        countryCode: String # Auto detected country code
        referrer: ObjectID # reference to another user
        userReferralCount: Number @cost(cost: 50)
        joined: Date
        sessions: [Session]
    }

    type Session {
        user: User
        token: String
        lastUsed: Date
        agent: String
    }
    
    type UserTimeline {
        count: Number
        label: String
    }

    message usersGraph: [UserTimeline] @cost(cost: 300)
    message userCount(days: Number): Number @cost(cost: 150)
    message me: User @authenticated @cost(cost: 50)

    message loginUser (
        email: String! @lowercase
        password: String!
    ): String @cost(cost: 500)

    message createUser (
        email: String! @lowercase
        password: String!
        firstName: String!
        lastName: String!
        phoneNumber: String!
        callingCode: String!
        countryCode: String!
        referrer: ObjectID
    ): Void @cost(cost: 500)

    message deleteToken (token: String!): Boolean @authenticated @cost(cost: 150)
    `

    set password (value) {
        this.doc.password = bcrypt.hashSync(value, 10)
    }

    comparePassword (value) {
        return bcrypt.compareSync(value, this.doc.password)
    }

    async displayPicture () {
        if(!this.doc.displayPicture) {
            this.doc.displayPicture = generateDisplayPicture(this.doc.firstName.substr(0, 1) + this.doc.lastName.substr(0, 1))
            await this.save()
        }
        return this.doc.displayPicture
    }

    /**
     * Returns first email in emails array (primary)
     */
    get email () {
        return this.doc.emails[0].email
    }

    /**
     * Checks if a token if a token is valid (exists and not expired)
     * Also removes expired tokens from the user's sessions array
     * 
     * @returns {Promise<Boolean>}
     */
    async validateToken (token) {
        let sessions = this.doc.sessions
        let shouldSave = false

        // 20 days offset allowed after lastUsed date
        let dateOffset = (24 * 60 * 60 * 1000) * 20 //20 days
        let match = false

        for(let index in sessions) {
            let session = sessions[index]

            if(!session) {
                this.doc.sessions[index] = null
                shouldSave = true
                continue
            }

            let sessionValidUntil = session.lastUsed + dateOffset
            
            if(new Date().getTime() < sessionValidUntil) {
                if(session.token === token) {
                    this.doc.sessions[index].lastUsed = new Date().getTime() // reset lastUsed, which extends expiry date (rolling window)
                    shouldSave = true
                    match = true
                    continue
                }
            }else{
                this.doc.sessions[index] = null
                shouldSave = true
            }
        }

        this.doc.sessions = this.doc.sessions.filter(val => val !== null)

        if(shouldSave) await this.save()

        return match
    }

    static async authenticate (token) {
        const { secret } = ENV
        const decodedToken = jwt.verify(token, secret)

        if(decodedToken.id) {
            const user = await User.findOne({_id: new ObjectID(decodedToken.id)})
            if(user && await user.validateToken(token)) return user
        }

        return null
    }

    /**
     * Number of users the user has referred
     */
    async userReferralCount () {
        return await User.collection.countDocuments({ referrer: this.doc._id })
    }
    
    /**
     * Create a session and return the JWT API token
     */
    async createToken () {
        if(!this.doc.sessions) {
            this.doc.sessions = []
        }

        let secret = ENV.secret
        let session = {
            token: jwt.sign({id: String(this.doc._id), created: new Date().getTime()}, secret),
            lastUsed: new Date().getTime()
        }

        this.doc.sessions.push(session)

        await this.save()

        return session.token 
    }
    
    async deleteToken (token) {
        let sessions = this.doc.sessions

        let match = false

        this.doc.sessions = sessions.filter((session)=>{
            if(session.token !== token) return session
            match = true
        })
        
        await this.save()

        return match
    }

    static async createIndexes () {
        await this.collection.createIndex({ 'emails.email': 1 }, { unique: true })
        await this.collection.createIndex({ joined: 1 })
        await this.collection.createIndex({ joined: -1 })
        await this.collection.createIndex({ referrer: 1 })
    }

    static get resolvers () {
        return resolvers 
    }
}

export const resolvers = {
    /**
     * This function generates a JSON Web Token (JWT) for the given user, which can be used for API Requests.  
     */
    async loginUser ({email, password}) {
        const user = await User.findOne({'emails.email': email}) //find the user

        if(!user) throw new Error(`Could not find user with email: ${email}`)

        if(!user.comparePassword(password)) throw new Error('Password is incorrect')

        return user.createToken()
    },
    async me ({}, { context }) {
        if(!context.state.user) throw new Error('User not authenticated')
        return context.state.user
    },
    async deleteToken ({token}, { context }) {
        let user = context.state.user
        if(!user) throw new Error('You must be authenticated to delete a token')
        return await user.deleteToken(token)
    },
    async createUser (inputs) {
        const {
            email,
            firstName,
            lastName,
            callingCode,
            phoneNumber,
            countryCode,
            referrer
        } = inputs

        if(!email) throw new Error('You must enter an email address')
        if(!firstName) throw new Error('You must enter a first name')
        if(!lastName) throw new Error('You must enter a last name')
        if(!callingCode) throw new Error('You must enter a calling code')
        if(!phoneNumber) throw new Error('You must enter a phone number')

        let user = new User({
            emails: [{email, verified: false}],
            firstName,
            lastName,
            callingCode,
            phoneNumber,
            countryCode,
            joined: new Date().getTime()
        })

        user.password = inputs.password //hashes password

        if(referrer) { // set the user's referrer by finding the user that referred them
            try {
                if(User.findOne({_id: new ObjectID(referrer)})) { //verify the user exists
                    user.referrer = new ObjectID(referrer)
                }
            } catch (error) {
                console.error(error) // ignore any errors setting a referrer
            }
        }

        try {
            await user.save()
        } catch (error) {
            if(error.code === 11000) throw new Error(`User with email ${email} already exists`)
            throw error
        }

        return null
    },
    async userCount ({days}) {
        let day = 1000 * 60 * 60 * 24
        let query = {}
        if(days) { //check for users in the past number of days
            query._id = { $lt: new ObjectID(~~(new Date() - day * days))}
        }

        return await User.collection.countDocuments(query)
    },
    async usersGraph () {
        let weeksToCountBack = 8
        let week = 1000 * 60 * 60 * 24 * 7
        let current = new Date().getTime() + week
        let arr = []
        let col = User.collection

        for(let i = 0; i < weeksToCountBack; i++) { //create an array item containing date and count for each week
            let date = new Date(current - week)
            current -= week
            let label = date.toLocaleDateString('en-au', { day: '2-digit', month: '2-digit'})
            let id = new ObjectID(~~(date / 1000))
            let count = await col.countDocuments({_id: { $lt: id}})
            arr.push({label, count})
        }

        return arr
    }
}
