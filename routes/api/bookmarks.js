const router = require("express").Router();
const bookmarkcontroller = require("../../controller/bookmark-controller");




// equivalent to "api/users"
router.route("/")

    .get(bookmarkcontroller.getAllbookmark)
    .post(bookmarkcontroller.addBookmark);

// equivalent to "api/users/:id"
router.route("/:id")

    .get(bookmarkcontroller.getBookmark)
    .delete(bookmarkController.deleteBookmark);


module.exports = router;

