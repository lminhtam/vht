/*
Tạo một CSDL có tên là "ToanDB" trên local host
*/
var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/ToanDB"

mongoClient.connect(url, function(err, db)
{
	if(err) throw err;

	console.log('Database "ToanDB" created!');

	db.close();
});