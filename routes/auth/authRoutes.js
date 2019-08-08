var passport = require("passport");
const router = require("express").Router();
const authController = require("../../controller/user-controller");

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
    res.cookie("userid", req.user.profileID, { domain: "esarnb.github.io", path: "/venvi-fe/auth/google/success", expires: new Date(Date.now() + 9000000), httpOnly: false })
    res.cookie("authenticated", true, { domain: "esarnb.github.io", path: "/venvi-fe/auth/google/success", expires: new Date(Date.now() + 9000000), httpOnly: false });
  }
  
  setTimeout(() => {
    res.redirect("https://esarnb.github.io/venvi-fe/auth/google/success")  
  }, 10000);
})

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

module.exports = router;
