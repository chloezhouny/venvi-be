
var db = require("../models");

require("dotenv").config();

var uuid = require("uuid/v4");
var AWS = require("aws-sdk");
var s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

function uploadImage(req, image, cb) {
	//use req from the post method, and the image data can be get using the code below

	var imageFile = req.files.file.data;
	s3.createBucket(function () {
		var params = {
			Bucket: process.env.S3_BUCKET_NAME,
			ACL: 'public-read',
			Key: `${image}.jpg`,
			Body: imageFile
		}
		s3.upload(params, function (err, data) {
			if (err) {
				console.log("error with upload");
				console.log(err);
			} else {
				console.log("Upload Success");
				console.log("image", data);
				cb(data.Location);
			}
		})
	});
};

module.exports = {
	getAllUsers: function (req, res) {
		db.User.findAll({})
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	addUser: function (req, res) {
		db.User.create(req.body)
			.then(dbuser => {
				res.json(dbuser);
			})
			.catch(err => res.status(422).json(err));
	},

	getUser: function (req, res) {
		db.User.findOne({ where: { id: req.params.id } })
			.then(dbUser => {
				console.log(dbUser);
				res.json(dbUser)})
			.catch(err => res.status(422).json(err));
	},

	getUserByProfileID: function (req, res) {
		db.User.findOne({ where: { profileID: req.params.id } })
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	
	editUser: function (req, res) {
		db.User.update(
			{
				phone: req.body.phone,
				location: req.body.location,
			},
			{ 
				where: { id: req.params.id } 
			})
			.then(dbUser => res.json(dbUser))
			.catch(err => res.status(422).json(err));
	},

	updateListingPhoto: function (req, res) {
		console.log(process.env.AWS_ACCESS_KEY_ID)
		console.log(process.env.AWS_SECRET_ACCESS_KEY)
		console.log(process.env.S3_BUCKET_NAME)

		var name = req.body.name.toLowerCase();
		name = name.replace(/\s/g, '');
		name = name + uuid();


		var profilePhoto = {
			name: req.body.name,
			image: name
		};

		uploadImage(req, profilePhoto.image, function (location) {
			console.log(location);
			console.log('!!!!!!!!!!');
			console.log(req);

			db.User.update(
				{
					profilePhoto: location,
				},
				{
					where: { id: req.params.id }
				})
				.then(function (dbUser) {
					res.json({ imageUrl: location });
				});
		});
	},

	profile: function(req, res) {
		console.log("PROFILE ROUTE: ", req.user);
		res.json(req.user);
	},


	logout: function(req, res) {
		req.logout();
		res.redirect("/");
	},

	redirectSuccess: function(req, res) {
		console.log("SUCCESS ROUTE: ", req.user);
		res.redirect("/")
	}

}

	
	

