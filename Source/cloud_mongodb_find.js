/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://Student:hello1@ds263138.mlab.com:63138/tylers';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("tylers");
    dbase.collection("newCollection").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
