var express = require('express');
var mongodb = require("mongodb");

var router = express.Router();

var mongoClient = mongodb.MongoClient;

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/"

/* GET home page. */
router.get('/', function(req, res, next) 
{
	console.log(req.query);

	mongoClient.connect(url, function(err, db)
	{
		if(err) throw err;

		var dbo = db.db("ToanDB");

		var query

		if (req.query.stall == undefined)
		{
			query = req.query
		}
		else if (req.query.stall != "null")
		{
			query = 
			{
				stall: req.query.stall
			}
		}
		else
		{
			query = 
			{
				price: { $gte: parseInt(req.query.gte), $lte: parseInt(req.query.lte) }
			}
		}

		dbo.collection("products").find(query).toArray(function(err, result)
		{
			if(err) throw err;

			console.log('SELECT * FROM products AS P WHERE ');
			
			console.log(query);

			console.log(result);

			db.close();

			res.render('category', 
			{
				products: result
			});
		});
	});	
});

module.exports = router;