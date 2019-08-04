const router = require("express").Router();


const testRoutes = require("./test");

const userRoutes = require("./users");
const vehicleRoutes = require("./vehicles");
const reviewRoutes = require("./reviews");
const listingRoutes = require("./listings");
const bookmarkRoutes = require("./bookmarks");


router.use("/test", testRoutes);

router.use("/users", userRoutes);
router.use("/vehicles", vehicleRoutes);
router.use("/reviews", reviewRoutes);
router.use("/listings", listingRoutes);
router.use("/bookmarks", bookmarkRoutes);


module.exports = router;