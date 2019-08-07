var passport = require("passport");
const router = require("express").Router();
const authController = require("../../controller/user-controller");


//Then the user redirects to youtube
router.get("/login", (req, res, next) => {
  passportAuthenticate('google', { scope: ["profile", "email"] })
})

passportAuthenticate = (googleStrategy, req, res, next) => {
  passport.authenticate(googleStrategy, (err, user, info) => {
    if (err) return next(err)
    if (!user) {
      console.log("INFO ", info);
      return res.send({success: false, message: info});
    }
    else {
      req.login(user, logErr => {
        if (logErr) return next(logErr);

        res.cookie("userid", user.id)
        res.cookie("authenticated", true);

        return res.json({success: true});
      })
    }
  })(req, res, next)
}

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) throw err;
    req.logout();
    res.clearCookie("userid");
    res.clearCookie("user_sid");
    res.json(req.isAuthenticated());
  })
})

router.get('/check', (req, res)=> {
  let auth = req.isAuthenticated();
  res.json(auth);
});

// //First the button is hit to update passport
// router.route("/login").get( (req, res) => {
//   passport = req.app.get('passport')
//   res.redirect("/auth/google")
// })

//Once the user is verified, return to site
router.route("/callback").get(passport.authenticate('google', { successRedirect: '/auth/google/check', failureRedirect: '/', failureFlash: 'Invalid login' }))

// //Redirect the user to their profile page
// router.route("/profile").get(isLoggedIn, authController.profile);

// //If the user hits log out btn, run logout
// router.route("/logout").get(authController.logout);

// //Check if the user is already logged in or not
// function isLoggedIn(req, res, next) {
//   // if user is authenticated in the session, carry on
//   if (req.isAuthenticated()) return next();
//   // if they aren't redirect them to home or signins
//   res.redirect('/');
// }

module.exports = router;
