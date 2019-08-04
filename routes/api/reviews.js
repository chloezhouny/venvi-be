const router = require("express").Router();
const reviewcontroller = require("../../controller/review-controller");




// equivalent to "api/reviews"
router.route("/")

    .get(reviewcontroller.getAllReviews)
    .post(reviewcontroller.addReview);

// equivalent to "api/reviews/:id"
router.route("/:id")

    .get(reviewcontroller.getReview)
    .put(reviewcontroller.editReview);


module.exports = router;

