var userQueries = require('../models/user-queries');
var bcrypt = require('bcryptjs');

module.exports.index = function(req, res, next)
{
	res.render('registration');
}

module.exports.indexPost = function(req, res, next) 
{
	var { name, email, password1, password2 } = req.body;

	var errors = [];

	if(!name || !email || !password1 || !password2)
	{
		errors.push('You forget some fields :(');
	}
	if(password1 != password2)
	{
		errors.push('Your password do not match :(');
	}
	if(password1.length <= 6)
	{
		errors.push('Your password must be at least 7 characters :(');
	}

	if(errors.length > 0)
	{
		res.render('registration', 
		{
			errors: errors,
			values: req.body
		});
	}
	else
	{
		userQueries.getListUserByQuery({ email: email }, function(users)
		{
			var user = users[0];
			if(user)
			{
				errors.push('Email already exists :(');
		        res.render('registration', 
				{
					errors: errors,
					values: req.body
				});
			}
			else
			{
				var newUser = 
				{
					name: name,
					email: email,
					password: password1
				}

				bcrypt.genSalt(10, function(err, salt)
				{
			        bcrypt.hash(newUser.password, salt, function(err, hash)
			        {
			            if (err) throw err;

			            newUser.password = hash;

			            userQueries.insertUser(newUser, function(result)
			            {
			            	req.flash('success_msg', 'You are now registered and can log in :)');

			                res.redirect('login.html');
			            });
			        });
			    });
			}
		});
	}
}