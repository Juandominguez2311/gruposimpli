const DatabaseService = require('./DatabaseService')

class DealerService {
    async get() {
        return DatabaseService.get('dealer')
    }

    async getById(id) {
      const query = { id };
      return DatabaseService.getById('dealer', query);
    }

    vehiclePost(body){
      return DatabaseService.create('vehicle', body)
  }

 accesoryPost(body){
    return DatabaseService.create('accesory', body)
}
   async singUp(email, password) {
        return DatabaseService.create('dealer', email, password)
    }
    async login_post(email, password){
      return DatabaseService.login_post('dealer', email, password)
    }

    async update(id , body) {
        const query = { id };
        return DatabaseService.update('dealer', query, body);
      }
    
      async delete(id) {
        const query = { id };
        return DatabaseService.delete('dealer', query);
      }
    }


module.exports = new DealerService()