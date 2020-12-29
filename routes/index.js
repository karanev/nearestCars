const express = require ('express');
const drivers = require ('./drivers');

const router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use ('/drivers', drivers);

module.exports = router;