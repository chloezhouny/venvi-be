
const express = require("express");

// const routes = require("./routes");
const routes = require("./routes/auth");


//Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Add routes, both API and view

// Configuration ==============================================
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var cookieParser = require('cookie-parser');

require("./config/passport")(passport); // pass passport for configuration

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// app.use(routes(app, passport));
// require("./routes")(app, passport);

// Start the API server
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
	  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});