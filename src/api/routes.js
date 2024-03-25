const router = require('express').Router()
const dealerRoutes = require('./dealer/routes')
const vehicleRoutes = require('./vehicle/routes')
const accesoryRoutes = require('./accesory/routes')
const leadRoutes = require('./lead/routes')
router.use('/dealer', dealerRoutes)
router.use('/vehicle', vehicleRoutes)
router.use('/accesory', accesoryRoutes)
router.use('/lead', leadRoutes)

module.exports = router