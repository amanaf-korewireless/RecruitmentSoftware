var express = require('express');
var router = express.Router();
var validator =require('../lib/validator/schemaValidator.js');


/* Register new student  */
router.post('/', function(req, res, next) {
  console.log("registration process started ",req.body);
  exports.createUser = function (userData, callback) {
    //validate json schema
    validator.validateRegisterStudentSchema(req.body, function (err, reply) {
        if (err) {
          res.status(400).send({ "error": err ,"errorCode": "GEN001" })
          return;
        }
        else {
          res.status(200).send({ "msg": "student registration completed succussfully" })
          return;
        }
    });
}
});










// login student

//view student result

module.exports = router;
