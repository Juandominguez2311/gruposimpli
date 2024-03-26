const { DealerService } = require('../../services')
const jwt = require('jsonwebtoken');



class DealerController {

  //LOGIN & SINGUP

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

  //DEALER

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

  async put( req, res, next) {
    try {
      const { params: { id }, body } = req;
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

  async post( req, res, next) {
    try {
        const result = await DealerService.create({ ...req.body })
        return res.json(result)
    } catch(err) {
        next(err)
    }
}

  //VEHICLE
  async getVehicleByDealerId( req, res, next) {
    try {
      const { params: { id } } = req;
      const result = await DealerService.getVehicleByDealerId(id);
      if (result) {
        return res.json(result);
      }

    } catch (err) {
      next(err);
    }
  }

  async getSingleVehicleByDealerId( req, res, next) {
    try {
      const { params: { idproduct } } = req;
      const result = await DealerService.getSingleVehicleByDealerId(idproduct);
      if (result) {
        return res.json(result);
      }

    } catch (err) {
      next(err);
    }
  }

  async postVehicle(req, res, next) {
    try {
      const result = await DealerService.vehiclePost({ ...req.body });
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async putVehicle( req, res, next) {
    try {
      const { params: { idproduct }, body } = req;
      const result = await DealerService.updateVehicle(idproduct, body);
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async deleteVehicle( req, res, next) {
    try {
      const { params: { idproduct }} = req;
      const result = await DealerService.deleteVehicle(idproduct);
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

  //ACCESORY
   
  async getAccesoryByDealerId( req, res, next) {
    try {
      const { params: { id } } = req;
      const result = await DealerService.getAccesoryByDealerId(id);
      if (result) {
        return res.json(result);
      }

    } catch (err) {
      next(err);
    }
  }

  async getSingleAccesoryByDealerId( req, res, next) {
    try {
      const { params: {  idproduct } } = req;
      const result = await DealerService.getSingleAccesoryByDealerId(idproduct);
      if (result) {
        return res.json(result);
      }

    } catch (err) {
      next(err);
    }
  }
    
  async postAccesory(req, res, next) {
    try {
      const result = await DealerService.accesoryPost({ ...req.body });
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }
   
  async putAccesory( req, res, next) {
    try {
      const { params: { idproduct }, body } = req;
      const result = await DealerService.updateAccesory(idproduct, body);
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }

  async deleteAccesory( req, res, next) {
    try {
      const { params: { idproduct }} = req;
      const result = await DealerService.deleteAccesory(idproduct);
      return res.json(result);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new DealerController()