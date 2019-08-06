


//Initialize Express
const express = require("express");
const app = express();

var host = process.env.HOST || '0.0.0.0';

const PORT = process.env.PORT || 3001;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + PORT);
});
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
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session()); 
app.use(session({ secret: 'venividivenvi' }));
app.use(express.urlencoded({ extended: true }));

//Using CORS for heroku
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'https://venvi-be.herokuapp.com/');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const fileUpload = require("express-fileupload");
app.use(fileUpload());

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