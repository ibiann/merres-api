import {
    MongoClient
} from "mongodb";
import {
    env
} from '../config/environment'

let dbInstance = null

export const connectDB = async () => {
    const client = new MongoClient(env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })

    //connecting client to server
    await client.connect()

    //assign database for client
    dbInstance = client.db(env.DATABASE_NAME)

}

// get dbInstance

export const getDB = () => {
    if (!dbInstance) throw new Error("Where is your db ??? bozo")
    return dbInstance
}

// const listDatabases = async (client) => {
//     const databasesMenu = await client.db().admin().listDatabases()
//     console.log(databasesMenu)
//     console.log('Your databases: ')
//     databasesMenu.databases.forEach(db => console.log(` - ${db.name}`))
// }