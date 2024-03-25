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


    async post( req, res, next) {
        try {
            const result = await AccesoryService.create({ ...req.body })
            return res.json(result)
        } catch(err) {
            next(err)
        }
    }

    async put( req, res, next) {
        try {
          const { params: { id }, body } = req;
          // TODO: here we should use JOI to validate schema
          const result = await AccesoryService.update(id, body);
          return res.json(result);
        } catch (err) {
          next(err);
        }
      }
    
      async delete( req, res, next) {
        try {
          const { id } = req.params;
          const result = await AccesoryService.delete(id);
          return res.json(result);
        } catch (err) {
          next(err);
        }
      }
}

module.exports = new AccesoryController()