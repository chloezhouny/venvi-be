const router = require("express").Router();
const vehiclecontroller = require("../../controller/vehicle-controller");




// equivalent to "api/vehicles"
router.route("/")

    .get(vehiclecontroller.getAllVehicle)
    .post(vehiclecontroller.addVehicle);

// equivalent to "api/vehicles/:id"
router.route("/:id")

    .get(vehiclecontroller.getVehicle)
    .put(vehiclecontroller.updateVehicle)
    .delete(vehicleController.deleteVehicle);

    
 

module.exports = router;

