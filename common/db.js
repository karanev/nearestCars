const mongoose = require ('mongoose');
const config   = require ('../config');

let connection = mongoose.createConnection(config.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

function db() {
  return connection;
}

module.exports.db = db;