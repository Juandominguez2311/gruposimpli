const router = require('express').Router()
const VehicleController = require('./controller')
const {checkUser} = require('../../middleware/authMiddleware')

router.get('/',  VehicleController.get)
router.get('/:id', VehicleController.getById)
router.get('/search/:name', VehicleController.getByName)

module.exports = router