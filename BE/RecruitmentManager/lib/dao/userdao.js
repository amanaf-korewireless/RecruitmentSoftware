
var config = require('../config/serverConfig.json');





exports.insert = function (studentData, callback) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(true, err);
            return;
        }
        console.log("mongo connection ok");
        var dbo = db.db("RecruitmentManager");
        dbo.collection("user").insertOne(studentData, function (err, res) {
            if (err) {
                callback(true, err);
                return;
            }
            console.log("1 document inserted");
            db.close();
            callback(null, true);
            return;
        });
    });
}

exports.isAllreadyExist = function (studentData, callback) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(true, err);
            return;
        }
        console.log("mongo connection ok");
        var dbo = db.db("RecruitmentManager");
        dbo.collection("user").findOne({ email: studentData.email }, function (err, result) {
            if (err) {
                callback(true, err);
                return;
            }
            console.log(result);
            var rv = false;
            if (result)
                rv = true;
            db.close();
            callback(null, rv);
            return;
        });
    });
}


exports.login = function (studentData, callback) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(true, err);
            return;
        }
        console.log("mongo connection ok");
        var dbo = db.db("RecruitmentManager");
        dbo.collection("user").findOne({ email: studentData.email, password: studentData.password }, function (err, result) {
            if (err) {
                callback(true, err);
                return;
            }
            console.log(result);
            db.close();
            callback(null, result);
            return;
        });
    });
}

exports.update = function (studentData, callback) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(true, err);
            return;
        }
        console.log("mongo connection ok");
        var dbo = db.db("RecruitmentManager");
        var myquery = { email: studentData.email };
        var newvalues = { $set: studentData };
        dbo.collection("user").updateOne(myquery, newvalues, function (err, res) {
            if (err) {
                callback(true, err);
                return;
            }
            db.close();
            callback(null, true);
            return;
        });
    });
}

exports.validateAuthToken = function (studentData, callback) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(true, err);
            return;
        }
        console.log("mongo connection ok");
        var dbo = db.db("RecruitmentManager");
        dbo.collection("user").findOne({ email: studentData.email, token: studentData.token }, function (err, result) {
            if (err) {
                callback(true, err);
                return;
            }
            console.log(result);
            db.close();
            callback(null, result);
            return;
        });
    });
}

exports.getAllDetails = function (studentData, callback) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(true, err);
            return;
        }
        console.log("mongo connection ok");
        var dbo = db.db("RecruitmentManager");
        dbo.collection("user").find({}).toArray(function (err, result) {
            if (err) {
                callback(true, err);
                return;
            }
            console.log(result);
            db.close();
            callback(null, result);
            return;
        });
    });
}

exports.getUserDetailsByEmail = function (studentData, callback) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url, function (err, db) {
        if (err) {
            callback(true, err);
            return;
        }
        console.log("mongo connection ok");
        var dbo = db.db("RecruitmentManager");
        dbo.collection("user").findOne({ email: studentData.email }, function (err, result) {
            if (err) {
                callback(true, err);
                return;
            }
            console.log(result);
            db.close();
            callback(null, result);
            return;
        });
    });
}


