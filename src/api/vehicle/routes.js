const router = require('express').Router()
const VehicleController = require('./controller')

router.get('/', VehicleController.get)
router.get('/:id', VehicleController.getById)
router.get('/search/:name', VehicleController.getByName)
router.post('/', VehicleController.post)
router.put('/:id', VehicleController.put)
router.delete('/:id', VehicleController.delete)

module.exports = router