const router = require("express").Router();
const vehiclecontroller = require("../../controller/vehicle-controller");




// equivalent to "api/vehicles"
router.route("/")

    .get(vehiclecontroller.getAllVehicle)
    .post(vehiclecontroller.Vehicle);

// equivalent to "api/vehicles/:id"
router.route("/:id")

    .get(vehiclecontroller.getVehicle)
    .put(vehiclecontroller.editVehicle)
 

module.exports = router;

