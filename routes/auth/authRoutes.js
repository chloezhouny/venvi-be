  var passport = require("passport");
  const router = require("express").Router();
  const authController = require("../../controller/user-controller");

  // router.route("/").get(function(req, res) {
  //   let passport = req.app.get('passport')
  //   passport.authenticate('google', { scope: ['email', 'profile'] });
  // })
  router.route("/login").get( (req, res) => {
    passport = req.app.get('passport')
    res.redirect("/auth/google")
  })

  router.route("/").get(
    passport.authenticate('google', { scope: ["profile", "email"] })
  )

  router.route("/callback").get(passport.authenticate('google', { failureRedirect: '/', failureFlash: 'Invalid login' }), function(req, res) {
    res.redirect("/auth/google/profile");
    // res.redirect("/auth/google/success");
  })
    
  //   passport.authenticate('google', { 
  //     successRedirect: '/auth/google/profile', 
  //     failureRedirect: '/auth/google/profile', 
  //     failureFlash: 'Invalid login' 
  //   })

  // )

  router.route("/profile").get(isLoggedIn, authController.profile);

  router.route("/logout").get(authController.logout);

  router.route("/success").get(authController.redirectSuccess);

  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/loggedIn');
  }

  module.exports = router;