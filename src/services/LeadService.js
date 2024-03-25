const DatabaseService = require('./DatabaseService')

class LeadService {
    get() {
        return DatabaseService.get('lead')
    }
    async getById(id) {
      const query = { id };
      return DatabaseService.getById('lead', query);
    }

    create(body){
        return DatabaseService.create('lead', body)
    }

    async update(id , body) {
        const query = { id };
        return DatabaseService.update('lead', query, body);
      }
    
      async delete(id) {
        const query = { id };
        return DatabaseService.delete('lead', query);
      }
    }


module.exports = new LeadService()