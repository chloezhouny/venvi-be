var db = require("../models");




module.exports = {


getAllReview: function (req, res) {
    db.Review.findAll({
      order:[['time', 'desc']],
      limit:10}
      ).then(function(dbReview) {
      res.json(dbReview);
    });
  },



  addReview: function (req, res) {

    console.log(req.body);

    db.Review.create(req.body
      ).then(function(dbReview) {
      res.json(dbReview);
    });
  },


  //Get all reviews by vehicle id, and average out the ratings
  getReviewByVehicle: function (req, res) {
    db.Review.findAll(
      {
        where: {VehicleId: req.params.Vehicleid}
      },
      {
        order:[['time', 'desc']]
      }
      ).then(function(dbReview) {
      res.json(dbReview);
    });
  },

  deleteReview: function(req, res) {

    db.Review.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbReview) {
      res.json(dbReview);
    });
},

}

