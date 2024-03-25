const router = require('express').Router()
const LeadController = require('./controller')

router.get('/', LeadController.getAll)
router.get('/:id', LeadController.getById)
router.post('/', LeadController.post)
router.put('/:id', LeadController.put)
router.delete('/:id', LeadController.delete)

module.exports = router