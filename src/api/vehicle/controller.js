const { VehicleService } = require("../../services");

class VehicleController {
  async get(req, res, next) {
    try {
      const result = await VehicleService.get();
      return res.json({ result, count: result.length });
    } catch (err) {
      next(err);
    }
  }

  async getById(req, res, next) {
    try {
      const {
        params: { id },
      } = req;
      const result = await VehicleService.getById(id);
      if (result) {
        return res.json(result);
      }
    } catch (err) {
      next(err);
    }
  }

  async getByName(req, res, next) {
    try {
      const {
        params: { name },
      } = req;
      const result = await VehicleService.getByName(name);

      if (result) {
        return res.json({ result, count: result.length });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new VehicleController();
