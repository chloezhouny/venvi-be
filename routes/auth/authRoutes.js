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
  passport.authenticate('google', { successRedirect: '/auth/google/success', failureRedirect: '/login' })(req, res)
})

router.get("/success", (req, res) => {
  // console.log("SUCCESS SESSION PASS USER: ", req.session.passport.user);
  console.log("SUCCESS REQ USER: ", req.user);
  console.log("REQUEST COOKIE: ", req.cookies);
  
  // res.cookie("userid2", req.user.id, { path: '/', expires: new Date(Date.now() + 9000000), httpOnly: false })
  // res.cookie("authenticated2", true, { path: '/', expires: new Date(Date.now() + 9000000), httpOnly: false });
  
  
  // Set-Cookie: <cookie-name>=<cookie-value>
  res.header('Set-Cookie', `userid=${req.user.profileID}`)

  res.redirect("http://localhost:3000/venvi-fe/auth/google/success")
  // res.json({status: "okkkkkkkkkkkkkkk", msg: req.user})
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
