const express           = require ('express');
const driversController = require ('../controllers/drivers');

const router            = express.Router();

router.get ('/location', driversController.getCurrentLocation);
router.get ('/nearest', driversController.getNearestDrivers);

module.exports = router;