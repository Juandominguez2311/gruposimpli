const DatabaseService = require("./DatabaseService");
const RedisService = require('./RedisService')

class VehicleService {
  async get() {
    try {
      const resultRedis = await RedisService.get("vehicle-list");
      if (resultRedis) {
        return resultRedis;
      } else {
        const result = await DatabaseService.get("vehicle");
        await RedisService.set("vehicle-list", result);
        return result;
      }
    } catch (err) {
      console.log("Error al obtener los accesorios");
      console.log(err);
    }
  }


  async getById(id) {
    const query = { id };
    return DatabaseService.getById("vehicle", query);
  }

  async getByName(name) {
    return DatabaseService.getByName("vehicle", name);
  }
}

module.exports = new VehicleService();
