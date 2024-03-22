const DatabaseService = require('./DatabaseService')

class DealerService {
    get() {
        return DatabaseService.get('dealer')
    }
    create(body: any){
        
        return DatabaseService.create('dealer', body)
    }
}

module.exports = new DealerService()