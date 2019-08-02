
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
var db = require("./models");
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');

require("./config/passport")(passport); // pass passport for configuration

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(session({ secret: 'venividivenvi' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://testing-backend-with-chloe.herokuapp.com/'); // eventually change to heroku url - may need to be localhost:3000
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

var routes = require("./routes");

app.set('passport', passport);

app.use(routes);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

// Start the API server
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
	  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});