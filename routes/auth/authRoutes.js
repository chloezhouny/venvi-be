module.exports = function(passport) {
  const router = require("express").Router();
  const authController = require("../../controller/user-controller");

  //   "/auth/google/"
  router.route("/profile").get(isLoggedIn, authController.profile);
  router.route("/logout").get(authController.logout);
  router.route("/callback").get(authController.callback);
  router.route("/success").get(authController.redirectSuccess);

  router.route("/").get(function(req, res) {
    passport.authenticate('google', { scope: ['email', 'profile'] });
  })

  router.route("/callback").get(function(req, res) {
    passport.authenticate('google', { successRedirect: '/profile', failureRedirect: '/', failureFlash: 'Invalid login' })
  })

  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
  }

}