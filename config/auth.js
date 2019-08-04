require("dotenv").config();

module.exports = {

  'googleAuth' : {
      'clientID'      : process.env.GOOGLE_CLIENT_ID,
      'clientSecret'  : process.env.GOOGLE_CLIENT_SECRET,
      'callbackURL'   : 'https://venvi-passport2.herokuapp.com/auth/google/callback'
  }

};
