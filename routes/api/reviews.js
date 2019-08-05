const router = require("express").Router();
const reviewcontroller = require("../../controller/review-controller");




// equivalent to "api/reviews"
router.route("/")

    .get(reviewcontroller.getAllReview)
    .post(reviewcontroller.addReview);



// equivalent to "api/reviews/:id"
router.route("/:id")

    .get(reviewcontroller.getReviewById)
    .delete(reviewcontroller.deleteReview);

// equivalent to "api/reviews/vehicle/:id"
router.route("/vehicle/:id")
 .get(reviewcontroller.getReviewByVehicle)


module.exports = router;

