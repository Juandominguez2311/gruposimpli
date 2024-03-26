const DatabaseService = require('./DatabaseService')
const RedisService = require('./RedisService')

class AccesoryService {
  async get() {
    try {
      const resultRedis = await RedisService.get("accesory-list");
      if (resultRedis) {
        return resultRedis;
      } else {
        const result = await DatabaseService.get("accesory");
        console.log(result);
        await RedisService.set("accesory-list", result);
        return result;
      }
    } catch (err) {
      console.log("Error al obtener los accesorios");
      console.log(err);
    }
  }

  async getById(id) {
    const query = { id };
    return DatabaseService.getById("accesory", query);
  }

  async getByName(name) {
    return DatabaseService.getByName("accesory", name);
  }
}


module.exports = new AccesoryService()