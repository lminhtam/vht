var express = require('express');
var mongodb = require("mongodb");

var router = express.Router();

var mongoClient = mongodb.MongoClient;

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/"

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
		/* GET home page. */
		router.get('/', function(req, res, next) 
		{
		  res.render('index', 
		  {
		  	products: result
		  });
		});
	});
});

module.exports = router;
