const redis = require("redis");

class RedisService {
  constructor() {
    this.client = undefined;
  }

  async connect() {
    try {
      this.client = await redis
        .createClient({
          host: "127.0.0.1",
          port: "6379",
        })
        .on("error", (err) => console.log("Redis Client Error", err))
        .connect();
    } catch (err) {
      console.error(
        "Error while trying to connect to redis, application will crash",
        err
      );
      process.exit(1);
    }
  }

  async get(key) {
    try {
      const result = await this.client.get(key);
      return JSON.parse(result);
    } catch (error) {
      console.log("error en get");
      console.log(error);
    }
  }

  set(key, value) {
    try {
    return this.client.set(key, JSON.stringify(value));
  } catch (error) {
    console.log("error en set");
    console.log(error);
  }
  }

  delete(key) {
    try {
      return this.client.delete(key);
    } catch (error) {
      console.log("error en delete");
      console.log(error);
    }
  }
}

module.exports = new RedisService();
