
var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/";

mongoClient.connect(url, function(err, db)
{
	if(err) throw err;

	var dbo = db.db("ToanDB");

	dbo.collection("products").find({}).toArray(function(err, result)
	{
		if(err) throw err;

		console.log('SELECT * FROM products AS P');

		//console.log(result);

		module.exports = _.clone(result);

		db.close();
	});
});