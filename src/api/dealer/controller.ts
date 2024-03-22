const { DealerService } = require('../../services')

class DealerController {
    getAll(req: any, res: any, next: any) {
        try {
            const dealers = DealerService.get()
            return res.json(dealers)
        } catch(err) {
            next(err)
        }
    }

    async post(req: any, res: any, next: any) {
        try {
            const result = await DealerService.create({ ...req.body })
            return res.json(result)
        } catch(err) {
            next(err)
        }
    }
}

module.exports = new DealerController()