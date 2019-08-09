var passport = require("passport");
const router = require("express").Router();
const authController = require("../../controller/user-controller");

serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}


//Then the user redirects to youtube
router.get("/", (req, res) => {
  passport.authenticate("google", { scope: ["profile", "email"], display: "popup" })(req, res);
})

//Once the user is verified, return to site
router.get("/callback", (req, res) => {
  passport.authenticate('google', { successRedirect: '/auth/google/success', failureRedirect: '/auth/google/success' })(req, res)
})

//Route auth/google/success
router.get("/success", (req, res) => {
  console.log("SUCCESS SESSION PASS USER: ", req.session.passport.user);
  console.log("SUCCESS REQ USER: ", req.user);
  console.log("SUCCESS REQ SESSION USER: ", req.session);
  //
  if (req.user && req.user.profileID) {
    let obj2params = serialize(req.user);
    res.redirect(`https://phillipchang.github.io/venvi-fe/?${obj2params}`);  
    // res.redirect(`https://esarnb.github.io/venvi-fe/success/${obj2params}`);  
    // res.cookie("userid", req.user.profileID, {domain: "esarnb.github.io"})
    // res.cookie("authenticated", true, {domain: "esarnb.github.io"});
  }
  else {
    res.redirect(`https://phillipchang.github.io/venvi-fe/`);  
  }
})

// //First the button is hit to update passport
// router.route("/login").get( (req, res) => {
//   passport = req.app.get('passport')
//   res.redirect("/auth/google")
// })

// //Then the user redirects to youtube
// router.route("/").get(
//   passport.authenticate('google', { scope: ["profile", "email"] })
// )

// //Once the user is verified, return to site
// router.route("/callback").get(passport.authenticate('google', { successRedirect: '/auth/google/profile', failureRedirect: '/', failureFlash: 'Invalid login' }))

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
