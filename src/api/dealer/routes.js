const router = require('express').Router()
const DealerController = require('./controller')
const {checkUser} = require('../../middleware/authMiddleware')


//Login & singup
router.post('/signup', DealerController.signup_post);
router.post('/login', DealerController.login_post); 


//Dealer
router.get("/:id", checkUser, DealerController.getById)
router.put('/:id',checkUser, DealerController.put)
router.delete('/:id',checkUser, DealerController.delete)
router.post('/', DealerController.post); 

//Vehicle
router.get('/:id/vehicle', checkUser, DealerController.getVehicleByDealerId);
router.get('/:id/vehicle/:idproduct', checkUser, DealerController.getSingleVehicleByDealerId);
router.post('/:id/vehicle', checkUser, DealerController.postVehicle);
router.put('/:id/vehicle/:idproduct',checkUser, DealerController.putVehicle)
router.delete('/:id/vehicle/:idproduct',checkUser, DealerController.deleteVehicle)
//Accesory
router.get('/:id/accesory', checkUser, DealerController.getAccesoryByDealerId);
router.get('/:id/accesory/:idproduct', checkUser, DealerController.getSingleAccesoryByDealerId);
router.post('/:id/accesory', checkUser, DealerController.postAccesory);
router.put('/:id/accesory/:idproduct',checkUser, DealerController.put)
router.delete('/:id/accesory/:idproduct',checkUser, DealerController.deleteAccesory)

module.exports = router