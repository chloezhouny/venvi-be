const router = require("express").Router();
const listingcontroller = require("../../controller/listing-controller");

// equivalent to "api/listings"
router.route("/")
    .get(listingcontroller.getAllListing)
    .post(listingcontroller.addListing);


// equivalent to "api/listings/:id"
router.route("/:id")
    .put(listingcontroller.editListing)
    .delete(listingcontroller.deleteListing);


// equivalent to "api/listings/listingphoto/:id"
router.route("/listingphoto/:id")
    .post(listingcontroller.updatePhoto);


// equivalent to "api/listings/user/:userid"
router.route("/user/:userid")
    .get(listingcontroller.getListingByUser)


// equivalent to "api/listings/:make/:model/:year"
router.route("/vehicle/:make/:model/:year")
	.get(listingcontroller.getListingByVehicle)


module.exports = router;

