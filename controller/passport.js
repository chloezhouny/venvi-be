var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require("./auth");
var db = require("../models");

module.exports = function(passport) {
  
  //Serializing user for sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  });

  //Deserializing the user
  passport.deserializeUser(function(id, done) {
    console.log("DESERIALIZEd USER ID: ", id);
    db.User.findOne({ where: {id: id}}).then((user, err) => {
      console.log("DESERIALIZEd USER: ", user);
      
      console.log("Function DONE: ", done);
      done(err, user);
    })
  })

}