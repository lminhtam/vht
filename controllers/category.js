var productQueries = require('../models/product-queries');

module.exports.index = function(req, res, next) 
{
	var { stall, gte, lte, sort, startPage, page, perPage } = req.query;

	startPage = (startPage == undefined) ? 1 : parseInt(startPage);
	page = (page == undefined) ? 1 : parseInt(page);
	perPage = (perPage == undefined) ? 8 : parseInt(perPage);

	var start = (page - 1) * perPage;
	var end = page * perPage;


	var query, options;
	if(stall == undefined)
	{
		if(gte == undefined)
		{
			if(sort == undefined)
			{
				query = {};
				options = {};
			}
			else
			{
				query = {};
				options = { 'price': parseInt(sort) };
			}
		}
		else
		{
			if(sort == undefined)
			{
				query = { price: { $gte: parseInt(gte), $lte: parseInt(lte) } };
				options = {};
			}
			else
			{
				query = { price: { $gte: parseInt(gte), $lte: parseInt(lte) } };
				options = { 'price': parseInt(sort) };
			}
		}
	}
	else
	{
		if(gte == undefined)
		{
			if(sort == undefined)
			{
				query = { stall: stall };
				options = {};
			}
			else
			{
				query = { stall: stall };
				options = { 'price': parseInt(sort) };
			}
		}
		else
		{
			if(sort == undefined)
			{
				query = { stall: stall, price: { $gte: parseInt(gte), $lte: parseInt(lte) } };
				options = {};
			}
			else
			{
				query = { stall: stall, price: { $gte: parseInt(gte), $lte: parseInt(lte) } };
				options = { 'price': parseInt(sort) };
			}
		}
	}
	productQueries.getListProductByQuery(query, function(products)
	{
		res.render('category', 
		{
			products: products.slice(start, end),
			stall: stall,
			gte: gte,
			lte: lte,
			sort: sort,
			startPage: startPage,
			page: page,
			perPage: perPage
		});
	}, options);
}