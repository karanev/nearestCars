const driversModel   = require ('../models/drivers');

const driversController = {};

driversController.addDriver = async function (req, res) {
    return console.log (req.body);

    try {
        driver = await driversModel.addDriver (req.body);
    } catch (err) {
        console.error ({err : err, message : err.message, stack : err.stack});
        return res.send ({err : err, message : err.message});
    }

    return res.send ({data: driver});
};

driversController.updateDriverLocation = async function (req, res) {

    try {
        driver = await driversModel.updateDriverLocation (req.body);
    } catch (err) {
        console.error ({err : err, message : err.message, stack : err.stack});
        return res.send ({err : err, message : err.message});
    }

    return res.send ({data: driver});
};

module.exports = driversController;