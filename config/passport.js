var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var configAuth = require("./auth");
var db = require("../models");

module.exports = function(passport) {
  
  //Serializing user for sessions
  passport.serializeUser(function(user, done) {
    done(null, user.id)
  });

  //Deserializing the user (Mysql id)
  passport.deserializeUser(function(id, done) {
    db.User.findOne({ where: {id: id}}).then((user) => {
      if (user) done(null, user.get())
      else done(user.errors, null);
    });
  });

  //Google Strategy Oauth2
  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL
  }, function(token, refreshToken, profile, done) {
     console.log("\n\n\n\n\n PROFILE: " , profile, "\n\n\n\n");
    //When the user signs in, check whether the sign in was successful, or if the user is in the db, else create the user
    process.nextTick(function() {
      db.User.findOne({ where: {profileID: profile.id}}).then((user, err) => {
        if (err) return done(err);
        if (user) return done(null, false)
        else {
          db.User.create({
            name: profile.name.givenName, //First Name
            username: profile.displayName, //Display Name (could be nick names)
            email: profile.emails[0].value, // First available email
            profilePhoto: profile.photos[0].value, //First available profile photo
            profileID: profile.id //Account based google profile unique id
          })
          .then((dbUser) => {
              // send post back to render
              return done(null, dbUser);
          })
          .catch((err) => {
              // handle error;
              console.log(err);
          });
        }
      });
    });
  }));
}
