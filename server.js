//Initialize Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Defining middleware 

var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');

//Initialize passport.js from config
require("./config/passport")(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  key: 'user_sid',
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {
      expires: 21600000, // 6 HRS
      httpOnly: false
  }
}));

app.use(flash()); 
app.use(morgan('dev')); 
app.use(cookieParser()); 
app.use(passport.initialize());
app.use(passport.session()); 

//Using CORS for heroku
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://venvi-be.herokuapp.com/');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Send passport through express
app.set('passport', passport);

// Add all routes to be used
const routes = require("./routes");
app.use(routes);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

// Start the API server
var db = require("./models");
db.sequelize.sync({force: true}).then(function() {
	app.listen(PORT, function() {
	  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});