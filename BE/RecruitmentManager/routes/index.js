var express = require('express');
var router = express.Router();
var userDao = require('../lib/dao/userdao.js');
var validator =require('../lib/validator/schemaValidator.js');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Recruitment Manager' });
});


/* Register new student  */
router.post('/login/', function (req, res, next) {
  console.log("login process started ", req.body);
  //validate json schema
  validator.validateLoginSchema(req.body, function (err, reply) {
    if (err) {
      res.status(400).send({ "errorMessage": "Incorrect Request Data Formatexpress-jsonschema: Invalid data found", "errorCode": "ER001" })
      return;
    }
    else {
      console.log("request body validation completed");
      userDao.login(req.body, function (err, reply) {
        if (err) {
          res.status(400).send({ "errorMessage": "Server error", "errorCode": "ER002" })
          return;
        }
        if (!reply) {
          res.status(400).send({ "errorMessage": "Invalid username or password", "errorCode": "ER004" })
          return;
        }
        var data = reply;
        console.log("data : ", data);
        require('crypto').randomBytes(48, function (err, buffer) {
          if (err) {
            res.status(400).send({ "errorMessage": "Server error", "errorCode": "ER002" })
            return;
          }
          console.log("token generated succussfully");
          var token = buffer.toString('hex');
          data.token = token;
          userDao.update(data, function (err, reply) {
            if (err) {
              res.status(400).send({ "errorMessage": "Server error", "errorCode": "ER002" })
              return;
            }
            console.log("user login completed succussfully");
            res.status(200).send({ "succuss": true, "token": token })
            return;
          });
        });
      });
    }
  });
});

module.exports = router;
