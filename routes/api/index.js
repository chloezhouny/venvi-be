const router = require("express").Router();
const vehicleRoutes = require("./routes");

router.use("/vehicle", vehicleRoutes);
module.exports = router;