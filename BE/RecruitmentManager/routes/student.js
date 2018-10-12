var express = require('express');
var router = express.Router();



/* Register new student  */
router.post('/', function(req, res, next) {
  console.log("registration process started ",req.body);
  res.send('succuss');
});










// login student

//view student result

module.exports = router;
