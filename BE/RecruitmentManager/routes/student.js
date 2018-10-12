var express = require('express');
var router = express.Router();



/* Register student */
router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});








/* update student */
router.put('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* GET users listing. */
router.delete('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET student reslt */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
