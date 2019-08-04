const router = require("express").Router();
const vehiclecontroller = require("../../controller/vehicle-controller");




// equivalent to "api/users"
router.route("/")

    .get(vehiclecontroller.getAllVehicle)
    .post(vehiclecontroller.addVehicle);

// equivalent to "api/users/:id"
router.route("/:id")

    .get(vehiclecontroller.getVehicle)
    .put(vehiclecontroller.editVehicle)
 



module.exports = router;

