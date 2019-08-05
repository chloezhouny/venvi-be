const router = require("express").Router();
const bookmarkcontroller = require("../../controller/bookmark-controller");




// equivalent to "api/bookmarks"
router.route("/")

    .get(bookmarkcontroller.getAllbookmark)
    .post(bookmarkcontroller.addBookmark);

// equivalent to "api/bookmarks/:id"
router.route("/:id")

    .get(bookmarkcontroller.getBookmark)
    .delete(bookmarkController.deleteBookmark);


module.exports = router;

