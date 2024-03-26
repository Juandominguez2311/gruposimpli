const { LeadService } = require('../../services')

class LeadController {
    async getAll( req, res, next) {
        try {
            const result = await LeadService.get()
            return res.json(result)
        } catch(err) {
            next(err)
        }
    }

    async getById( req, res, next) {
      try {
        const { params: { id } } = req;
        const result = await LeadService.getById(id);
        if (result) {
          return res.json(result);
        }
  
      } catch (err) {
        next(err); 
      }
    }

    async post( req, res, next) {
      try {
          const result = await LeadService.create({ ...req.body })
          return res.json(result)
      } catch(err) {
          next(err)
      }
  }

    async put( req, res, next) {
        try {
          const { params: { id }, body } = req;
          const result = await LeadService.update(id, body);
          return res.json(result);
        } catch (err) {
          next(err);
        }
      }
    
      async delete( req, res, next) {
        try {
          const { id } = req.params;
          const result = await LeadService.delete(id);
          return res.json(result);
        } catch (err) {
          next(err);
        }
      }
}

module.exports = new LeadController()