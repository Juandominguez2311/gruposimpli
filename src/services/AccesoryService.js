const DatabaseService = require('./DatabaseService')

class AccesoryService {
    get() {
        return DatabaseService.get('accesory')
    }

    async getById(id) {
      const query = { id };
      return DatabaseService.getById('accesory', query);
    }

    async getByName(name){
      return DatabaseService.getByName('accesory', name);
    }

    create(body){
        return DatabaseService.create('accesory', body)
    }

    async update(id , body) {
        const query = { id };
        return DatabaseService.update('accesory', query, body);
      }
    
      async delete(id) {
        const query = { id };
        return DatabaseService.delete('accesory', query);
      }
    }


module.exports = new AccesoryService()