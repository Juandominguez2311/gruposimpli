const DatabaseService = require("./DatabaseService");

class LeadService {
  get() {
    return DatabaseService.get("lead");
  }
  async getById(id) {
    const query = { id };
    return DatabaseService.getById("lead", query);
  }

  create(body) {
    return DatabaseService.create("lead", body);
  }
}

module.exports = new LeadService();
