/*
Tạo một BẢNG có tên là "products" trong CSDL "ToanDB"
*/
var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/"

mongoClient.connect(url, function(err, db)
{
	if(err) throw err;

	var dbo = db.db("ToanDB");

	dbo.createCollection("products", function(err, result)
	{
		if(err) throw err;

		console.log('Collection "products" created in database "ToanDB"!');

		console.log(result);

		db.close();
	});
});