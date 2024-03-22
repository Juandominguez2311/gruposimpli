const router = require('express').Router()
const dealerRoutes = require('./dealer/routes')

router.use('/dealer', dealerRoutes)

module.exports = router