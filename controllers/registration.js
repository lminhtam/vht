
var mongodb = require("mongodb");
const bcrypt = require('bcryptjs');

var mongoClient = mongodb.MongoClient;

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/";

module.exports.index = function(req, res, next)
{
	res.render('registration');
}

module.exports.indexPost = function(req, res, next) 
{
	console.log(req.body);

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
	if(password1.length < 6)
	{
		errors.push('Your password must be at least 6 characters :(');
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
		mongoClient.connect(url, function(err, db)
		{
			if(err) throw err;

			var dbo = db.db("ToanDB");

			var query = 
			{
				email: email
			}
			dbo.collection("User").findOne(query, function(err, result)
			{
				if(err) throw err;

				console.log('SELECT * FROM User AS U');

				console.log(result);

				if(result)
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

				            dbo.collection("User").insertOne(newUser, function(err, result)
							{
								if(err) throw err;

								console.log("" + result.insertedCount + ' documents inserted in collection "User" of database "ToanDB"!');

								console.log(result);

								db.close();

								req.flash('success_msg', 'You are now registered and can log in :)');

				                res.redirect('login');
							});
				        });
				    });
				}
			});
		});
	}
}