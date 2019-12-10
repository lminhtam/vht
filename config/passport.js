var userQueries = require('../models/user-queries');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcryptjs');
var ObjectId = require("mongodb").ObjectId;

module.exports = function(passport)
{
  passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done)
  {
    userQueries.getListUserByQuery({ email: email }, function(users)
    {
      var user = users[0];
      if(!user) 
      {
        return done(null, false, { message: 'That email is not registered :(' });
      }

      bcrypt.compare(password, user.password, function(err, isMatch)
      {
        if (err) throw err;

        if (isMatch) 
        {
          return done(null, user);
        } 

        return done(null, false, { message: 'Password incorrect :(' });
      });
    });
  }));

  passport.serializeUser(function(user, done) 
  {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done)
  {
    userQueries.getListUserByQuery({ _id: ObjectId(id) }, function(users)
    {
      done(null, users[0]);
    });
  });
}
