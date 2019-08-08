var db = require("../models");

module.exports = {



getAllVehicles: function (req, res) {
    db.Vehicle.findAll(
      ).then(function(dbVehicle) {
      res.json(dbVehicle);
    });
  },



//check if there is a existing vehicle
getVehicleByType: function (req, res) {
    db.Vehicle.findOne(
    {
      where:{
       make: req.params.make,
        model: req.params.model,
        year: req.params.year
      }
    }).then(function(dbVehicle) {
        console.log("in database");
      console.log(dbVehicle)
      res.json(dbVehicle);
    });
  },



//send back the Vehicle id
  addVehicle: function (req, res) {

    console.log(req.body);
    console.log("in controller", req);

    db.Vehicle.create(req.body
      ).then(function(dbVehicle) {
      res.json(dbVehicle);
    });
  },


  getVehicle: function (req, res) {
    db.Vehicle.findAll({
      where: {id: req.params.id}
      }).then(function(dbVehicle) {
      res.json(dbVehicle);
    });
  },


//Update average rating
  updateVehicle: function (req, res) {
    db.Vehicle.update(
      {
        rating: req.body.rating,
      },
      {
        where: {id: req.params.id}
      })
    .then(function(dbVehicle)
    {
      res.json(dbVehicle);
    });
  },


  deleteVehicle: function(req, res) {

    db.Vehicle.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbVehicle) {
      res.json(dbVehicle);
    });
}



 




}

