var db = require("../models");

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




getAllListing: function (req, res) {
    db.Listing.findAll({
      order:[['time', 'desc']],
      limit:10}
      ).then(function(dbListing) {
      res.json(dbListing);
    });
  },


//send back the listing id
  addListing: function (req, res) {

    console.log(req.body);

    db.Listing.create(req.body
      ).then(function(dbListing) {
      res.json(dbListing);
    });
  },


  

  getListing: function (req, res) {
    db.Listing.findAll(
      {
        where: {UserId: req.params.id}
      },
      {
        order:[['time', 'desc']],
        limit:10
      }
      ).then(function(dbListing) {
      res.json(dbListing);
    });
  },


  deleteListing: function(req, res) {

    db.Listing.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbListing) {
      res.json(dbListing);
    });
},


updatePhoto: function (req, res) {
	
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

			db.Listing.update(
				{
					image: location,
				},
				{
					where: { id: req.body.ListingId }
				})
				.then(function (dbUser) {
					res.json({ imageUrl: location });
				});
		});
	}

}

