class Model {
    static types = ``
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

        if (_id) {
            await this.collection.updateOne({_id}, {$set: {...this.doc}}, { upsert: true })
        } else {
            let insert = await this.collection.insertOne(this.doc)
            this.document._id = insert.insertedId
        }
    }
}

module.exports = Model