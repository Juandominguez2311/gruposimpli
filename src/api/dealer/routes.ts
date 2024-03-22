const router = require('express').Router()
const DealerController = require('./controller')

router.get('/', DealerController.getAll)
router.get('/:id', (req: any, res: any) => res.send('Dealer API endpoint: getOne ' + req.params.id))
router.post('/', DealerController.post)
router.put('/:id', (req: any, res: any) => res.send('Dealer API endpoint: update'))
router.delete('/:id', (req: any, res: any) => res.send('Dealer API endpoint: delete'))

module.exports = router