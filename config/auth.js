require("dotenv").config();

module.exports = {

  'googleAuth' : {
      'clientID'      : process.env.GOOGLE_CLIENT_ID,
      'clientSecret'  : process.env.GOOGLE_CLIENT_SECRET,
      'callbackURL'   : 'https://venvi-passport.herokuapp.com/auth/google/callback'
  }

};
