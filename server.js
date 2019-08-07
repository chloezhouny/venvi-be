//Initialize Express
var passport = require('passport');
const express = require("express");
const session = require('express-session');
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3001;

var morgan = require('morgan');

//Initialize passport.js from config
require("./config/passport")(passport);

app.use(cookieParser())
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// Using CORS for heroku
app.use((req, res, next) => {
  // res.header('Access-Control-Allow-Origin', 'https://venvi-be.herokuapp.com/');
  res.header('Access-Control-Allow-Origin', 'https://venvi-passport2.herokuapp.com/');
  // res.header("Access-Controller-Allow-Origin", "http://127.0.0.1:3001/")
  // res.header('Access-Control-Allow-Origin', '127.0.0.1:3001');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
// var cors = require("cors");
// app.use(cors())
// app.use(cors({credentials: true, origin: "localhost:3001"}));


const fileUpload = require("express-fileupload");
app.use(fileUpload());

//Send passport through express
// app.set('passport', passport);

// Add all routes to be used
const routes = require("./routes");
app.use(routes);

// app.set("passport", passport)

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