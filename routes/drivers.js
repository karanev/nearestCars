const express           = require ('express');
const driversController = require ('../controllers/drivers');

const router            = express.Router();

router.post ('/', driversController.addDriver);
router.put ('/location', driversController.updateDriverLocation);

module.exports = router;