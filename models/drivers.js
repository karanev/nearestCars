const Schema = require ('../schemas/drivers');
const db     = require ('../common/db');
const config = require ('../config');

const connection = db.db ();
const Model      = connection.model ('drivers', Schema);

const model = {};

model.getCurrentLocation = async function (driverId) {
    if (!driverId) {
        throw new Error ('driver id is required to fetch driver location');
    }

    try {
        const driver = await Model.findOne ({ _id: driverId }).exec ();
        return driver;
    } catch (err) {
        console.error ({err : err, message : err.message, stack : err.stack});
        throw err;
    }
}

model.getNearestDrivers = async function (longitude, latitude) {
    if (!longitude || !latitude) {
        throw new Error ('both latitude and longitude are required to fetch nearest drivers');
    }

    try {
        const drivers = await Model.find ({
            location: {
                $near: {
                    $geometry: { type: "Point", coordinates: [longitude, latitude] },
                    $maxDistance: config.MAX_DISTANCE,
                }
            }
        }).exec ();
        return drivers;
    } catch (err) {
        console.error ({err : err, message : err.message, stack : err.stack});
        throw err;
    }
}

module.exports = model;