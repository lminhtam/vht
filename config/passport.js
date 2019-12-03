var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var mongodb = require("mongodb");

var mongoClient = mongodb.MongoClient;

var ObjectId = mongodb.ObjectId

var url = "mongodb+srv://toanhuuvuong:toanhuuvuong123456@toandb-lttzl.azure.mongodb.net/test?retryWrites=true&w=majority/";

module.exports = function(passport)
{
  passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done)
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

        db.close();

        if(!result) 
        {
          console.log('That email is not registered :(');
          return done(null, false, { message: 'That email is not registered :(' });
        }

        bcrypt.compare(password, result.password, function(err, isMatch)
        {
          if (err) throw err;

          if (isMatch) 
          {
            console.log('Login :)');
            return done(null, result);
          } 
          console.log('Password incorrect :(');
          return done(null, false, { message: 'Password incorrect :(' });
        });
      });
    });
  }));

  passport.serializeUser(function(user, done) 
  {
    console.log(user);
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done)
  {
    mongoClient.connect(url, function(err, db)
    {
      if(err) throw err;

      var dbo = db.db("ToanDB");

      console.log(id);

      var query = 
      {
        _id: ObjectId(id)
      }
      dbo.collection("User").findOne(query, function(err, result)
      {
        if(err) throw err;

        console.log('SELECT * FROM User AS U');

        console.log(result);

        db.close();

        done(err, result);
      });
    });
  });
};
