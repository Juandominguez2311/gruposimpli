const { MongoClient, ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')


const conn = {
  MONGO_DB_USER: "appuser",
  MONGO_DB_PWD: "LTyHbaUbov",
  MONGO_DB_HOST: "localhost",
  MONGO_DB_PORT: "27017",
  MONGO_DB_NAME: "gruposimpli",
};

class DatabaseService {
  constructor() {
    this.uri = `mongodb://${conn.MONGO_DB_USER}:${conn.MONGO_DB_PWD}@${conn.MONGO_DB_HOST}:${conn.MONGO_DB_PORT}/${conn.MONGO_DB_NAME}`;
    this.client = new MongoClient(this.uri);
    this.db = undefined;
    mongoose.connect(this.uri);
  }

  async get(collectionName) {
    const collection = this.db.collection(collectionName);
    return await collection.find().toArray();
  }

  async getById(collectionName, id) {
    const collection = this.db.collection(collectionName);
    return await collection.findOne({ _id: new ObjectId(id) });
  }

  async getByName(collectionName, name) {
    try {
      const collection = this.db.collection(collectionName);
      const query = { name: { $regex: new RegExp(name), '$options': 'i' } };
      return await collection.find(query).toArray();
    } catch (error) {
      console.error('Error en getByName:', error);
      throw error;
    }
  }

  async create(collectionName, value) {
    const collection = this.db.collection(collectionName);
    const { ops, insertedCount } = await collection.insertOne(value);
    return {
      data: ops,
      insertedCount,
    };
  }

  async update(collectionName, query, value) {
    delete value._id;
    const options = {
      upsert: false,
    };

    const collection = this.db.collection(collectionName);
    const update = {
      $set: value,
    };
    const { modifiedCount, upsertedId, upsertedCount, matchedCount } =
      await collection.updateOne({ _id: new ObjectId(query) }, update, options);

    return {
      modifiedCount,
      upsertedId,
      upsertedCount,
      matchedCount,
    };
  }

  async delete(collectionName, query, multi = false) {
    const collection = this.db.collection(collectionName);

    const { deletedCount } = await collection.deleteOne({
      _id: new ObjectId(query),
    });

    return {
      deletedCount,
    };
  }

  async singUp(collectionName, email, password) {
    try {
      const collection = this.db.collection(collectionName);
      const dealer = await collection.create({ email, password });
      return res.status(201).json(dealer);
    } catch (err) {
      console.log(err);
      res.status(400).send("error, user not created");
    }
  }

  async login_post(collectionName, email, password) {
    try {
      const collection = this.db.collection(collectionName);
      const dealer = await collection.findOne({ email: email.email });
      if (dealer) {
        if (dealer.password === password) {
          throw Error("incorrect password");
        }
      }
      return dealer
    } catch (err) {
      console.log(err);
      res.status(400).send("error, user not created");
    }
  }
  async connect() {
    const { client } = this;
    try {
      await client.connect();
      this.db = client.db(conn.MONGO_DB_NAME);
      console.log(`🍃 Connected to ${this.db.databaseName} database `);
    } catch (err) {
      console.error(
        "Error while trying to connect to mongodb, application will crash",
        err
      );
      process.exit(1);
    }
  }
}

module.exports = new DatabaseService();
