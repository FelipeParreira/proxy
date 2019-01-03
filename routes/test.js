var express = require('express');
var router = express.Router();

/* GET test */
router.get('/', function(req, res, next) {
  res.send('Response from API GET request!');
});

module.exports = router;
