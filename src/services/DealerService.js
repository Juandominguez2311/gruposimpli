const DatabaseService = require("./DatabaseService");
const RedisService = require('./RedisService')

class DealerService {
  //login & singup
  async singUp(email, password) {
    return DatabaseService.create("dealer", email, password);
  }
  async login_post(email, password) {
    return DatabaseService.login_post("dealer", email, password);
  }

  //dealer
  async get() {
    return DatabaseService.get("dealer");
  }

  async getById(id) {
    const query = { id };
    return DatabaseService.getById("dealer", query);
  }

  create(body) {
    return DatabaseService.create("dealer", body);
  }

  async update(id, body) {
    const query = { id };
    return DatabaseService.update("dealer", query, body);
  }

  async delete(id) {
    const query = { id };
    return DatabaseService.delete("dealer", query);
  }

  //vehicles

  async getVehicleByDealerId(id) {
    const query = { id };
    return DatabaseService.getByDealerId("vehicle", query);
  }

  async getSingleVehicleByDealerId(idproduct) {
    const query = { idproduct };
    return DatabaseService.getByIdProduct("vehicle", query);
  }

  async vehiclePost(body) {
    await RedisService.delete("vehicle-list")
    return DatabaseService.create("vehicle", body);
  }

  async updateVehicle(idproduct, body) {
    const query = { idproduct };
    await RedisService.delete("vehicle-list")
    return DatabaseService.updateProduct("vehicle", query, body);
  }

  async deleteVehicle(idproduct) {
    const query = { idproduct };
    return DatabaseService.delete("vehicle", query);
  }

  //accesories
  async getAccesoryByDealerId(id) {
    const query = { id };
    return DatabaseService.getByDealerId("accesory", query);
  }

  async getSingleAccesoryByDealerId(idproduct) {
    const query = { idproduct };
    return DatabaseService.getByIdProduct("accesory", query);
  }

  async accesoryPost(body) {
    await RedisService.delete("accesory-list")
    return DatabaseService.create("accesory", body);
  }

  async updateAccesory(idproduct, body) {
    const query = { idproduct };
    await RedisService.delete("accesory-list")
    return DatabaseService.updateProduct("accesory", query, body);
  }

  async deleteAccesory(idproduct) {
    const query = { idproduct };
    return DatabaseService.delete("accesory", query);
  }
}

module.exports = new DealerService();
