
module.exports = {



getAllVehicles: function (req, res) {
    db.Vehicle.findAll(
      ).then(function(dbVehicle) {
      res.json(dbVehicle);
    });
  },


//send back the Vehicle id
  addVehicle: function (req, res) {

    console.log(req.body);

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
        where: {id: req.params.VehicleId}
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

