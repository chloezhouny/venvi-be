var passport = require("passport");
const router = require("express").Router();
const authController = require("../../controller/user-controller");

//First the button is hit to update passport
router.route("/login").get( (req, res) => {
  passport = req.app.get('passport')
  res.redirect("/auth/google")
})

//Then the user redirects to youtube
router.get("/",
  passport.authenticate('google', { scope: ["profile", "email"] })
)

router.get(
  // OAuth 2 callback url. Use this url to configure your OAuth client in the
  // Google Developers console
  '/callback',

  // Finish OAuth 2 flow using Passport.js
  passport.authenticate('google'),

  // Redirect back to the original page, if any
  (req, res) => {
    console.log("ORIGINAL URL: ", req.originalUrl);
    
    const redirect = req.session.oauth2return || '/auth/google/profile';
    delete req.session.oauth2return;
    res.redirect(redirect);
  }
);

// //Once the user is verified, return to site
// router.route("/callback").get(passport.authenticate('google', { failureRedirect: '/', failureFlash: 'Invalid login' }), (res, req) => {
//   res.redirect("./works") //this should make client side redirect back to react app. But server should keep data gotten from google servers.
// })

//Redirect the user to their profile page
router.route("/profile").get(isLoggedIn, authController.profile);

//If the user hits log out btn, run logout
router.route("/logout").get(authController.logout);

//Check if the user is already logged in or not
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) return next();
  // if they aren't redirect them to home or signins
  res.redirect('/');
}

module.exports = router;
