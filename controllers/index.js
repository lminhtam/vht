var productQueries = require('../models/product-queries');

module.exports.index = function(req, res, next) 
{
	productQueries.getListProductByQuery({}, function(products)
	{
		var top10LastestProduct = products.slice(0, 10);

		productQueries.getListProductByQuery({}, function(products)
		{
			var top10MostPopularProduct = products.slice(0, 10);

			res.render('index', 
			{
				top10LastestProduct: top10LastestProduct,
				top10MostPopularProduct: top10MostPopularProduct
			});
		}, { numRate: -1 });

	}, { date: -1 });
}