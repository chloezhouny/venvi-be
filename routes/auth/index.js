const router = require("express").Router();
const authRoutes = require("./authRoutes");

router.use("/google", authRoutes);
module.exports = router;
