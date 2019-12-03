var passport = require('passport');

module.exports.index = function(req, res, next)
{
	res.render('login');
}

module.exports.indexPost = function(req, res, next)
{
	console.log(req.body);
	passport.authenticate('local', 
	{
	    successRedirect: 'dashboard.html',
	    failureRedirect: 'login.html',
	    failureFlash: true
  	})(req, res, next);
}