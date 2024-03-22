//@ts-nocheck
const { MongoClient, ObjectId } = require('mongodb')

const conn = {
    MONGO_DB_USER: 'appuser',
    MONGO_DB_PWD: 'LTyHbaUbov',
    MONGO_DB_HOST: 'localhost',
    MONGO_DB_PORT: '27017',
    MONGO_DB_NAME: 'gruposimpli'
}

class DatabaseService {
    constructor() {
        this.uri = `mongodb://${conn.MONGO_DB_USER}:${conn.MONGO_DB_PWD}@${conn.MONGO_DB_HOST}:${conn.MONGO_DB_PORT}/${conn.MONGO_DB_NAME}`
        this.client = new MongoClient(this.uri)
        this.db = undefined
    }

    get () {
        return [
            {
                name: 'Park Avenue Cars'
            },
            {
                name: 'Beach Road Cars'
            },
            {
                name: 'Lemon Street Cars'
            }
        ]
    }

   async create(collectionName, value){
        const collection = this.db.collection(collectionName);
        const {ops, insertedCount} = await collection.insertOne(value)
        return {
            data: ops,
            insertedCount
        }
    }

    async connect() {
        const { client } = this;
        try {
          await client.connect();
          this.db = client.db(conn.MONGO_DB_NAME);
          console.log( `🍃 Connected to ${this.db.databaseName} database `);
        } catch (err) {
          console.error('Error while trying to connect to mongodb, application will crash', err);
          process.exit(1); 
        }
      }
}

module.exports = new DatabaseService()