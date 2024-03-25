const { DealerService } = require('../../services')
const { VehicleService } = require("../../services");
const jwt = require('jsonwebtoken');



class DealerController {
    async getById( req, res, next) {
      try {
        const { params: { id } } = req;
        const result = await DealerService.getById(id);
        if (result) {
          return res.json(result);
        }
  
      } catch (err) {
        next(err);
      }
    }

    async signup_post( req, res, next) {
      const { email, password } = req.body;
        try {
            const result = await DealerService.singUp({ email, password })
            return res.json(result)
        } catch(err) {
            next(err)
        }
    }

    async login_post(req, res, next) {
      const { email, password } = req.body;
      try {
        const result = await DealerService.login_post({ email, password });
        const maxAge = 3 * 24 * 60 * 60;
        const createToken = (id) => {
          return jwt.sign({ id }, 'grupoSimpli', { expiresIn: "1h" });
        };
        const token = createToken(result._id);
        return res.status(200).json({ token, id: result._id }); // Corrected here, combining token and id in a single object
      } catch (err) {
        next(err);
      }
    }
    
    async post(req, res, next) {
      try {
        const result = await DealerService.vehiclePost({ ...req.body });
        return res.json(result);
      } catch (err) {
        next(err);
      }
    }

    async post(req, res, next) {
      try {
        const result = await DealerService.accesoryPost({ ...req.body });
        return res.json(result);
      } catch (err) {
        next(err);
      }
    }

    async put( req, res, next) {
        try {
          const { params: { id }, body } = req;
          // TODO: here we should use JOI to validate schema
          const result = await DealerService.update(id, body);
          return res.json(result);
        } catch (err) {
          next(err);
        }
      }
    
      async delete( req, res, next) {
        try {
          const { id } = req.params;
          const result = await DealerService.delete(id);
          return res.json(result);
        } catch (err) {
          next(err);
        }
      }
}

module.exports = new DealerController()