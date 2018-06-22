var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Student:hello1@ds263138.mlab.com:63138/tylers";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("tylers");
    dbo.collection('newCollection').aggregate([
        { $lookup:
                {
                    from: 'products',
                    localField: 'product_id',
                    foreignField: '_id',
                    as: 'orderdetails'
                }
        }
    ]).toArray(function(err, res) {
        if (err) throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});