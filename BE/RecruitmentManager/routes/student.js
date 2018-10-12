var express = require('express');
var router = express.Router();
var validator =require('../lib/validator/schemaValidator.js');


/* Register new student  */
router.post('/', function(req, res, next) {
  console.log("registration process started ",req.body);
    //validate json schema
    validator.validateRegisterStudentSchema(req.body, function (err, reply) {
        if (err) {
          res.status(400).send({ "errorMessage": "Incorrect Request Data Formatexpress-jsonschema: Invalid data found" ,"errorCode": "GEN001" })
          return;
        }
        else {
          console.log("request body validation completed");
          res.status(200).send({ "succuss":true,"msg": "student registration completed succussfully" })
          return;
        }
    });
});










// login student

//view student result

module.exports = router;
