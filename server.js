//Initialize Express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add all routes to be used
const routes = require("./routes");
app.use(routes);

// Start the API server
var db = require("./models");
db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
	  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
	});
});