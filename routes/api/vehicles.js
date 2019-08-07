const router = require("express").Router();
const vehiclecontroller = require("../../controller/vehicle-controller");




// equivalent to "api/vehicles"
router.route("/")

    .get(vehiclecontroller.getAllVehicles)
    .post(vehiclecontroller.addVehicle);

// equivalent to "api/vehicles/:id"
router.route("/:id")

    .get(vehiclecontroller.getVehicle)
    .put(vehiclecontroller.updateVehicle)
    .delete(vehiclecontroller.deleteVehicle);

// equivalent to "api/vehicles/vehicle/:make/:model/:year"
router.route("/vehicle/:make/:model/:year")
	.get(vehiclecontroller.getVehicleByType) 
 

module.exports = router;

