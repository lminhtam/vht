
var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/";

module.exports.index = function(req, res, next) 
{
	mongoClient.connect(url, function(err, db)
	{
		if(err) throw err;

		var dbo = db.db("ToanDB");

		dbo.collection("products").find({}).toArray(function(err, result)
		{
			if(err) throw err;

			console.log('SELECT * FROM products AS P');

			console.log(result);

			db.close();

			res.render('index', 
			{
				products: result
			});
		});
	});
}