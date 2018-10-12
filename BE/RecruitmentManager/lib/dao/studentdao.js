



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
        dbo.collection("student").insertOne(studentData, function (err, res) {
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
        var query = { email: studentData.email };
        dbo.collection("student").find(query).toArray(function (err, result) {
            if (err) {
                callback(true, err);
                return;
            }
            console.log(result);
            var rv = false;
            if (result.length == 0)
                rv = true;
            db.close();
            callback(null, rv);
            return;
        });
    });
}