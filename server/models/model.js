
export { collection } from '../bootstrap/db.js'

export class Model {
    static types = ''

    constructor (document = {}) {
        this.doc = document

        return new Proxy(this, {
            set (obj, key, value) {
                if (key === 'doc') {
                    obj.doc = value
                    return true
                }
                
                if (Object.getOwnPropertyDescriptor(Object.getPrototypeOf(obj), key)) {
                    obj[key] = value
                    return true
                }

                obj.doc[key] = value

                return true
            },
            get (obj, key) {
                if (obj[key]) return obj[key]

                return obj.doc[key]
            }
        })
    }

    async save () {
        let _id = this.doc._id
        let collection = this.constructor.collection

        if (_id) {
            await collection.updateOne({_id}, {$set: {...this.doc}}, { upsert: true })
        } else {
            let insert = await collection.insertOne(this.doc)
            this.doc._id = insert.insertedId
        }
    }

    static async findOne () {
        let doc = await this.collection.findOne(...arguments)
        if(!doc) return null
        return new this(doc)
    }
}
