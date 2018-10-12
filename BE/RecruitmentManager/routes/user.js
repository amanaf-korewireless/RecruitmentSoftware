var express = require('express');
var router = express.Router();
var validator =require('../lib/validator/schemaValidator.js');
var userDao=require('../lib/dao/userdao.js');

/* Register new student  */
router.post('/', function(req, res, next) {
  console.log("registration process started ",req.body);
    //validate json schema
    validator.validateRegisterStudentSchema(req.body, function (err, reply) {
        if (err) {
          res.status(400).send({ "errorMessage": "Incorrect Request Data Formatexpress-jsonschema: Invalid data found" ,"errorCode": "ER001" })
          return;
        }
        else {
          console.log("request body validation completed");
          userDao.isAllreadyExist(req.body,function(err,reply){
            if(err)
            {
              res.status(400).send({ "errorMessage": "Server error" ,"errorCode": "ER002" })
              return;
            }
            if(reply==true)
            {
              res.status(400).send({ "errorMessage": "Email already exist" ,"errorCode": "ER003" })
              return;
            }
            userDao.insert(req.body,function(err,reply){
              if(err)
              {
                res.status(400).send({ "errorMessage": "Server error" ,"errorCode": "ER002" })
                return;
              }
              console.log("user registration completed succussfully");
              res.status(200).send({ "succuss":true,"msg": "student registration completed succussfully" })
              return;
            });
          });
        }
    });
});










// login student

//view student result

module.exports = router;
