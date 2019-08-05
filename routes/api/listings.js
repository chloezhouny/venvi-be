const router = require("express").Router();
const listingcontroller = require("../../controller/listing-controller");




// equivalent to "api/listings"
router.route("/")

    .get(listingcontroller.getAllListing)
    .post(listingcontroller.addListing);

// equivalent to "api/listings/:id"
router.route("/:id")

    .get(listingcontroller.getListing)
    .put(listingcontroller.editListing)
    .delete(listingController.deleteListing);


// equivalent to "api/listings/listingphoto"
router.route("/listingphoto")
    .post(listingcontroller.updateListingPhoto);



module.exports = router;

