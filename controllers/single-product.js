
var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;

var ObjectId = mongodb.ObjectId

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/"

module.exports.index = function(req, res, next) 
{
	console.log(req.query);

	mongoClient.connect(url, function(err, db)
	{
		if(err) throw err;

		var dbo = db.db("ToanDB");

		var query = 
		{
			_id: ObjectId(req.query._id)
		}

		dbo.collection("products").find(query).toArray(function(err, result)
		{
			if(err) throw err;

			console.log('SELECT * FROM products WHERE ');
			
			console.log(query);

			console.log(result);

			db.close();
			
			res.render('single-product', 
			{
				products: result
			});
		});
	});	
}