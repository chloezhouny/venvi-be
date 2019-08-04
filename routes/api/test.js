const router = require("express").Router();
const testController = require("../../controller/test-controller");




// "/api/test"
router.route("/all").get(testController.findAll)
router.route("/new").post(testController.create);


//"/api/test/:id"
router.route("/update/:id").put(testController.update);
router.route("/delete/:id").delete(testController.remove);


router.route("*").get(testController.default)


module.exports = router;
