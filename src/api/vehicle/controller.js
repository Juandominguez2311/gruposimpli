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

  async post(req, res, next) {
    try {
      const result = await VehicleService.create({ ...req.body });
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async put(req, res, next) {
    try {
      const {
        params: { id },
        body,
      } = req;
      // TODO: here we should use JOI to validate schema
      const result = await VehicleService.update(id, body);
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      const result = await VehicleService.delete(id);
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new VehicleController();
