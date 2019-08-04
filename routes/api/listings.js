const router = require("express").Router();
const listingcontroller = require("../../controller/listing-controller");




// equivalent to "api/users"
router.route("/")

    .get(listingcontroller.getAllListing)
    .post(listingcontroller.addListing);

// equivalent to "api/users/:id"
router.route("/:id")

    .get(listingcontroller.getListing)
    .put(listingcontroller.editListing)
    .delete(listingController.deleteListing);


module.exports = router;

