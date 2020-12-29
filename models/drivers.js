const db = require ('../common/db').get ();

const model = {};

model.addDriver = async function (doc) {
    if (!doc) {
        return console.error ('no driver provided to insert');
    }

    if (!doc.location) {
        return console.error ('mandatory driver location was not provided');
    }

    try {
        const driver = await db.insertOne (doc);
        return driver;
    } catch (err) {
        console.error ({err : err, message : err.message, stack : err.stack});
    }
}

module.exports = model;