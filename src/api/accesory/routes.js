const router = require('express').Router()
const AccesoryController = require('./controller')

router.get('/', AccesoryController.getAll)
router.get('/:id', AccesoryController.getById)
router.get('/search/:name', AccesoryController.getByName)

module.exports = router