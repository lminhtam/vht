var productQueries = require('../models/product-queries');
var ObjectId = require("mongodb").ObjectId;

module.exports.index = function(req, res, next) 
{
	productQueries.getListProductByQuery({ _id: ObjectId(req.query._id) }, function(products)
	{
		res.render('single-product', 
		{
			product: products[0]
		});
	});
}