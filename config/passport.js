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
    //console.log("DESERIALIZEd USER ID: ", id);
    db.User.findOne({ where: {id: id}}).then((user) => {
      if (user) done(null, user.get())
      else done(user.errors, null);
      // done(err, user)
    });
  });

  //Using Google Oauth2
  passport.use("google-strategy", new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL
  }, function(token, refreshToken, profile, done) {

    process.nextTick(() => {
      //Retrieve user after login
      db.User.findOne({
        where: {profileID: profile.id}
      }).then((user, err) => {
        if (err) return done(err);
        else if (user) return done(null, user)

        //Create user if new login
        else {
          db.User.create({
            name: profile.name.givenName,
            username: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
            profileID: profile.id
          })
          .then((dbUser) => { done(null, dbUser) })
          .catch((err) => { console.log(err) });
        }

      }).catch((err) => console.log(err));
    })
  }))
}