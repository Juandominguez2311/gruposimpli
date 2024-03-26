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
    }


module.exports = new AccesoryService()