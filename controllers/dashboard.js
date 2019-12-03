module.exports.index = function(req, res, next)
{
	res.render('dashboard', 
	{
		user: req.user
	});
}