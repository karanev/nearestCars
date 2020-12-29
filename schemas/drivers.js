const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let drivers_schema = new Schema(
    {
        name: { type: String, required: true },
        location: {
            type: {
                type: String,
                enum: ['Point'],
                required: true
            },
            coordinates: {
                type: [Number],
                required: true
            }
        }
    }
);

module.exports = drivers_schema;