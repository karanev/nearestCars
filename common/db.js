const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://nearestCars:nearestCars@cluster0.edzww.mongodb.net/nearestCars?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
let mongodb;

function connect (callback) {
  client.connect ((err, db) => {
    if (err) {
      return console.error ("couldn't connect to db");
    }

    console.log ('db connected');
    mongodb = db;
    callback ();
  });
}

function get () {
  return mongodb;
}

function close () {
  mongodb.close ();
}

module.exports = {
  connect,
  get,
  close
};