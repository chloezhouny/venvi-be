var passport = require("passport");
const router = require("express").Router();
const authController = require("../../controller/user-controller");

/**
 * Set domain to redirect back to:
 */

 var redirectBackToClient = ""

//First the button is hit to update passport
router.route("/login").get( (req, res) => {
  passport = req.app.get('passport')
  res.redirect("/auth/google")
})

//Then the user redirects to youtube
// router.get("/",
//   passport.authenticate('google', { scope: ["profile", "email"] })
// )

router.get(
  // Login url
  '/',

  // Save the url of the user's current page so the app can redirect back to
  // it after authorization
  (req, res, next) => {
    if (req.query.return) {
      req.session.oauth2return = req.query.return;
    }
    next();
  },

  // Start OAuth 2 flow using Passport.js
  passport.authenticate('google', {scope: ['email', 'profile']})
);

router.get(
  // OAuth 2 callback url. Use this url to configure your OAuth client in the
  // Google Developers console
  '/callback',

  // Finish OAuth 2 flow using Passport.js
  passport.authenticate('google'),

  // Redirect back to the original page, if any
  (req, res) => {
    // res.redirect(req.headers.referer);
    // console.log("REFERER: ", req.headers.referer) 
    // const redirect = req.session.oauth2return || '/auth/google/profile';
    // delete req.session.oauth2return;
    let redirectURL =  `https://phillipchang.github.io/venvi-fe/receive/${req.user.profileID}/`;
    let redirectURL =  `http://localhost:3000/receive/${req.user.profileID}/`;
    console.log("REQ USER AS A STRING: ", redirectURL) 
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
