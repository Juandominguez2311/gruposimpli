const DatabaseService = require("./DatabaseService");

class VehicleService {
  async get() {
    return DatabaseService.get("vehicle");
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
