const mongoose = require('mongoose');

const db_url = 'mongodb+srv://nearestCars:nearestCars@cluster0-edzww.mongodb.net/nearestCars?retryWrites=true&w=majority';

let connection = mongoose.createConnection(db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function db() {
  return connection;
}

module.exports.db = db;