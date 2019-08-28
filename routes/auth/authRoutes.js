var passport = require("passport");
const router = require("express").Router();

//Conversion for Javascript Objects => url Param string
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
  //At this point, the file "passport.js" gets called- ( -figuratively. Literally its stored in it's variable in server.js `require("./config/passport")(passport);` ) 
  // and google returns data to there, registers user (or returns failure) into the database, 
  // and comes back here to make a success or failure redirect below. On success, we start to make a param url for front-end cookies.
  passport.authenticate('google', { successRedirect: '/auth/google/success', failureRedirect: '/auth/google/failure' })(req, res)
})

//Route auth/google/success
router.get("/success", (req, res) => {
  console.log("\n\n\n\n REQ.uSER: ", req.user, "\n\n\n\n");
  //If the user exists, redirect to the main site with user info to store as a cookie on the front - end and will pick user signed-in
  if (req.user && req.user.profileID) {
    let obj2params = serialize(req.user);
    res.redirect(`https://phillipchang.github.io/venvi-fe/?${obj2params}`);  
  }
  //If the user DNE, redirect to home which will pick user signed-out
  else {
    res.redirect(`https://phillipchang.github.io/venvi-fe/failure`);  
  }
})

module.exports = router;
