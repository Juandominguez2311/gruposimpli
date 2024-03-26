const router = require('express').Router()
const LeadController = require('./controller')

router.get('/', LeadController.getAll)
router.get('/:id', LeadController.getById)
router.post('/', LeadController.post)

module.exports = router