const { AccesoryService } = require('../../services')

class AccesoryController {
    async getAll( req, res, next) {
        try {
            const dealers = await AccesoryService.get()
            return res.json(dealers)
        } catch(err) {
            next(err)
        }
    }

    async getById( req, res, next) {
      try {
        const { params: { id } } = req;
        const result = await AccesoryService.getById(id);
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
    
        const result = await AccesoryService.getByName(name);
  
        if (result) {
          return res.json(result);
        }
      } catch (err) {
        next(err);
      }
    }
}

module.exports = new AccesoryController()