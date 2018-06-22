
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Student:hello1@ds263138.mlab.com:63138/tylers";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("tylers");
    var mysort = { name: 1 };
    dbo.collection("newCollection").find().sort(mysort).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});