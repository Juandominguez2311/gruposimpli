const router = require('express').Router()
const AccesoryController = require('./controller')

router.get('/', AccesoryController.getAll)
router.get('/:id', AccesoryController.getById)
router.post('/', AccesoryController.post)
router.get('/search/:name', AccesoryController.getByName)
router.put('/:id', AccesoryController.put)
router.delete('/:id', AccesoryController.delete)

module.exports = router