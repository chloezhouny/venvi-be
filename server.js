var passport = require('passport');
const express = require("express");
const session = require('express-session');
const cookieParser = require("cookie-parser");
var morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3001;

require("./config/passport")(passport);

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser())
app.use(morgan('dev')); 

app.use(
  session({
    key: 'user_sid',
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      expires: 21600000, // 6 hour limit
      httpOnly: false
    }
  })
)


app.use(passport.initialize());
app.use(passport.session()); 
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'https://venvi-be.herokuapp.com/');
  res.header('Access-Control-Allow-Origin', 'https://venvi-passport2.herokuapp.com/');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const fileUpload = require("express-fileupload");
app.use(fileUpload());

const routes = require("./routes");
app.use(routes);

var db = require("./models");
db.sequelize.sync({force: true}).then(function() {
	app.listen(PORT, function() {
	  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});