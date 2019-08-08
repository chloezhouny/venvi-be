var passport = require("passport");
const router = require("express").Router();
// const authController = require("../../controller/user-controller");

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
  passport.authenticate('google', { successRedirect: '/auth/google/success', failureRedirect: '/login' })(req, res)
})

//Route auth/google/success
router.get("/success", (req, res) => {
  console.log("SUCCESS SESSION PASS USER: ", req.session.passport.user);
  console.log("SUCCESS REQ USER: ", req.user);
  console.log("SUCCESS REQ SESSION USER: ", req.session);
  
  if (req.user && req.user.profileID) {
    let string = serialize(req.user);
    res.redirect(`https://esarnb.github.io/venvi-fe/success`);  
    // res.cookie("userid", req.user.profileID, {domain: "esarnb.github.io"})
    // res.cookie("authenticated", true, {domain: "esarnb.github.io"});
  }
})

// router.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) throw err;
//     req.logout();
//     res.clearCookie("userid");
//     res.clearCookie("user_sid");
//     res.json(req.isAuthenticated());
//   })
// })

// router.get('/check', (req, res)=> {
//   let auth = req.isAuthenticated();
//   res.json(auth);
// });

module.exports = router;
