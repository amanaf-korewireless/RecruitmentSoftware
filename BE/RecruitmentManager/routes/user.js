var express = require('express');
var router = express.Router();
var validator = require('../lib/validator/schemaValidator.js');
var userDao = require('../lib/dao/userdao.js');

/* Register new student  */
router.post('/', function (req, res, next) {
  console.log("registration process started ", req.body);
  //validate json schema
  validator.validateRegisterStudentSchema(req.body, function (err, reply) {
    if (err) {
      res.status(400).send({ "errorMessage": "Incorrect Request Data Formatexpress-jsonschema: Invalid data found", "errorCode": "ER001" })
      return;
    }
    else {
      console.log("request body validation completed");
      userDao.isAllreadyExist(req.body, function (err, reply) {
        if (err) {
          res.status(400).send({ "errorMessage": "Server error", "errorCode": "ER002" })
          return;
        }
        if (reply == true) {
          res.status(400).send({ "errorMessage": "Email already exist", "errorCode": "ER003" })
          return;
        }
        req.body.writingTestResult = "Pending";
        req.body.aptitudeTestResult = "Pending";
        req.body.technicalRound1Result = "Pending";
        req.body.technicalRound2Result = "Pending";
        req.body.hrRound2Result = "Pending";
        req.body.registrationDate = new Date();

        userDao.insert(req.body, function (err, reply) {
          if (err) {
            res.status(400).send({ "errorMessage": "Server error", "errorCode": "ER002" })
            return;
          }
          console.log("user registration completed succussfully");
          res.status(200).send({ "succuss": true, "msg": "student registration completed succussfully" })
          return;
        });
      });
    }
  });
});



/* view student result  */
router.get('/result/:email/:token', function (req, res, next) {
  var userData = {
    email: req.params.email,
    token: req.params.token
  }
  //validate json schema
  validator.validateViewResultSchema(userData, function (err, reply) {
    if (err) {
      res.status(400).send({ "errorMessage": "Incorrect Request Data Formatexpress-jsonschema: Invalid data found", "errorCode": "ER001" })
      return;
    }
    else {
      console.log("request body validation completed");
      userDao.validateAuthToken(userData, function (err, reply) {
        if (err) {
          res.status(400).send({ "errorMessage": "Server error", "errorCode": "ER002" })
          return;
        }
        if (!reply) {
          res.status(400).send({ "errorMessage": "Authentication Error, Invalid Token", "errorCode": "ER005" })
          return;
        }
        delete reply.password;
        delete reply.token;
        res.status(200).send({ "succuss": true, "data": reply })
        return;
      });
    }
  });
});


/* view all student details  */
router.get('/adminprovider/', function (req, res, next) {
  userDao.getAllDetails(req, function (err, reply) {
    if (err) {
      res.status(400).send({ "errorMessage": "Server error", "errorCode": "ER002" })
      return;
    }
    reply.forEach(element => {
      delete element.password;
      delete element.token;
    });
    res.status(200).send({ "succuss": true, "data": reply })
    return;
  });
});


/* update student result  */
router.put('/', function (req, res, next) {
  console.log("updation process started ", req.body);
  //validate json schema
  validator.validateupdateResultSchema(req.body, function (err, reply) {
    if (err) {
      res.status(400).send({ "errorMessage": "Incorrect Request Data Formatexpress-jsonschema: Invalid data found", "errorCode": "ER001" })
      return;
    }
    else {
      console.log("request body validation completed");
      userDao.getUserDetailsByEmail(req.body, function (err, reply) {
        if (err) {
          res.status(400).send({ "errorMessage": "Server error", "errorCode": "ER002" })
          return;
        }
        if (!reply) {
          res.status(400).send({ "errorMessage": "Invalid user", "errorCode": "ER006" })
          return;
        }
        var data = reply;
        data.writingTestResult = req.body.writingTestResult;
        data.aptitudeTestResult = req.body.aptitudeTestResult;
        data.technicalRound1Result = req.body.technicalRound1Result;
        data.technicalRound2Result = req.body.technicalRound2Result;
        data.hrRound2Result = req.body.hrRound2Result;
        data.registrationDate = req.body.registrationDate = new Date();

        userDao.update(data, function (err, reply) {
          if (err) {
            res.status(400).send({ "errorMessage": "Server error", "errorCode": "ER002" })
            return;
          }
          console.log("result updation completed succussfully");
          res.status(200).send({ "succuss": true, "msg": "result updation completed succussfully" })
          return;
        });
      });
    }
  });
});



module.exports = router;
