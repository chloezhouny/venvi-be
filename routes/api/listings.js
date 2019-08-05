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



// equivalent to "api/listings/:userid"
router.route("/:userid")
    .get(listingcontroller.getListingByUser)



// equivalent to "api/listings/:make/:model/:year"
router.route("/:make/:model/:year")
	.get(listingcontroller.getAllListingByVehicle)




// equivalent to "api/listings/listingphoto"
router.route("/listingphoto")
    .post(listingcontroller.updatePhoto);

module.exports = router;

