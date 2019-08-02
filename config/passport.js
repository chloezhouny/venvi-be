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
    db.User.findOne({ where: {id: id}}, function(err, user) {
      done(err, user);
    })
  })

  //Google Strategy
  passport.use(new GoogleStrategy({
    clientID: configAuth.googleAuth.clientID,
    clientSecret: configAuth.googleAuth.clientSecret,
    callbackURL: configAuth.googleAuth.callbackURL
  }, function(token, refreshToken, profile, done) {
    process.nextTick(function() {
      console.log("USER's PROFILE ID", profile.id);
      
      db.User.findOne({ where: {profileID: profile.id}}).then((err, user) => {
        if (err) return done(err);
        
        if (user) return done(null, user)
        else {
          console.log("CREATING NEW USER: ", user);
          db.User.create({
            name: "NewName",
            username: "NewUsername",
            password: "NoPassword",
            email: "sr@gmail.com",
            profileID: profile.id
          }).then((newUser) => {
            if (!newUser) return done(null, false)
            return done(null, newUser)
          })
          // var newUser = new db.User();

          // newUser.google.id    = profile.id;
          // newUser.google.token = token;
          // newUser.google.name  = profile.displayName;
          // newUser.google.email = profile.emails[0].value; // pull the first email

          // newUser.save(function(err) {
          //   if (err) throw err;
          //   return done(null, newUser);
          // });
        }
      });
    });
  }));
}
