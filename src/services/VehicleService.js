const DatabaseService = require('./DatabaseService')

class VehicleService {
  async get() {
        return DatabaseService.get('vehicle')
    }

    async getById(id) {
      const query = { id };
      return DatabaseService.getById('vehicle', query);
    }

    create(body){
        return DatabaseService.create('vehicle', body)
    }

    async update(id , body) {
        const query = { id };
        return DatabaseService.update('vehicle', query, body);
      }
    
      async delete(id) {
        const query = { id };
        return DatabaseService.delete('vehicle', query);
      }

      async getByName(name){
        return DatabaseService.getByName('vehicle', name);
      }
    }


module.exports = new VehicleService()