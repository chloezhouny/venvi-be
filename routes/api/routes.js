const router = require("express").Router();
const vehicleController = require("../../controller/vehicle-controller");

// "/api/vehicle"
router.route("/all").get(vehicleController.findAll)
router.route("/new").post(vehicleController.create);
router.route("/update/:id").put(vehicleController.update);
router.route("/delete/:id").delete(vehicleController.remove);
router.route("*").get(vehicleController.default)


module.exports = router;
