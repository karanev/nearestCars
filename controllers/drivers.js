const driversModel   = require ('../models/drivers');

const driversController = {};

driversController.getCurrentLocation = async function (req, res) {
    if (!req.query.id) {
        return res.status (422).send ({err: 'id is mandatory for fetching driver location'});
    }

    try {
        driver = await driversModel.getCurrentLocation (req.query.id);
    } catch (err) {
        console.error ({err : err, message : err.message, stack : err.stack});
        return res.status (500).send ({err : err, message : err.message});
    }

    return res.send ({data: driver.location.coordinates});
};

driversController.getNearestDrivers = async function (req, res) {
    if (!req.query.latitude || !req.query.longitude) {
        return res.status (422).send ({err: 'both latitude and longitude are required to fetch nearest drivers'});
    }

    try {
        drivers = await driversModel.getNearestDrivers (req.query.longitude, req.query.latitude);
    } catch (err) {
        console.error ({err : err, message : err.message, stack : err.stack});
        return res.send ({err : err, message : err.message});
    }

    return res.send ({data: drivers});
};

module.exports = driversController;