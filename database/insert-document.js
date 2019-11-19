/*
Thêm một danh sách các BỘ sản phẩm vào trong BẢNG "products" của CSDL "ToanDB"
*/
var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/"

mongoClient.connect(url, function(err, db)
{
	if(err) throw err;

	var dbo = db.db("ToanDB");

	var listProducts =
	[
		{ name: "Nike air max", stall: "Nike", image: "img/product/p1.jpg", oldPrice: "$150", price: "$120", status: "Còn hàng", description: "..." },
		{ name: "Nike air force", stall: "Nike", image: "img/product/p2.jpg", oldPrice: "$220", price: "$200", status: "Còn hàng", description: "..." },
		{ name: "Converse chuck 2", stall: "Converse", image: "img/product/p3.jpg", oldPrice: "$400", price: "$300", status: "Còn ít hàng", description: "..." },
		{ name: "Converse classic", stall: "Converse", image: "img/product/p4.jpg", oldPrice: "$190", price: "$170", status: "Hết hàng", description: "..." }
	]

	dbo.collection("products").insertMany(listProducts, function(err, result)
	{
		if(err) throw err;

		console.log("" + result.insertedCount + ' documents inserted in collection "products" of database "ToanDB"!');

		console.log(result);

		db.close();
	});
});