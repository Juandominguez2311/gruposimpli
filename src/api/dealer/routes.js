const router = require('express').Router()
const DealerController = require('./controller')
const {checkUser} = require('../../middleware/authMiddleware')

router.put('/:id', DealerController.put)
router.delete('/:id', DealerController.delete)
router.post('/:id/vehicle', checkUser, DealerController.post);
router.post('/:id/accesory', checkUser, DealerController.post);
router.post('/signup', DealerController.signup_post);
router.post('/login', DealerController.login_post); 
module.exports = router