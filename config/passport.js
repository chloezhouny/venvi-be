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

  //Google Strategy
  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL
  }, function(token, refreshToken, profile, done) {
      console.log("\n\n\n\n\nUSER's PROFILE", profile, "\n\n\n\n\n");
    
    process.nextTick(function() {
      //console.log("USER's PROFILE ID", profile.id);
      
      db.User.findOne({ where: {profileID: profile.id}}).then((user, err) => {
        if (err) return done(err);
        
        if (user) return done(null, false)
        else {
          //console.log("CREATING NEW USER: ", user);
          db.User.create({
            name: profile.name.givenName,
            username: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
            profileID: profile.id
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
