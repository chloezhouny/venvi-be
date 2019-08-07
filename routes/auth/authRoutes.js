var passport = require("passport");
const router = require("express").Router();
const authController = require("../../controller/user-controller");

//Then the user redirects to youtube
router.get("/", (req, res) => {
  // passport = req.app.get("passport")
  passport.authenticate("google", { scope: ["profile", "email"], display: "popup" })(req, res);
})

//Once the user is verified, return to site
router.get("/callback", (req, res) => {
  passport.authenticate('google', { successRedirect: 'http://localhost:3000/venvi-fe/auth/google/success', failureRedirect: '/login' })(req, res)
})

router.get("/success", (req, res) => {
  res.json({logged: true});
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


// passportAuthenticate = (googleStrategy, req, res, next) => {
//   // passport = req.app.get("passport")
//   passport.authenticate(googleStrategy, (err, user, info) => {
//     if (err) return next(err)
//     if (!user) {
//       console.log("INFO ", info);
//       return res.send({success: false, message: info});
//     }
//     else {
//       req.login(user, logErr => {
//         if (logErr) return next(logErr);

//         res.cookie("userid", user.id)
//         res.cookie("authenticated", true);

//         return res.json({success: true});
//       })
//     }
//   })(req, res, next)
// }

module.exports = router;
