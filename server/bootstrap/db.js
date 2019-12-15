import mongodb from 'mongodb'

const { MongoClient } = mongodb

let connection

export async function dbsetup() {
    let url = `mongodb://localhost`
    try {
        connection = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    } catch (error) {
        console.error('Moongraph Connection Error:')
        throw error
    }
}

export function collection(name){
    return connection.db('promatia').collection(name)
}