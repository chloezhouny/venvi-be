const router = require("express").Router();
const bookmarkcontroller = require("../../controller/bookmark-controller");

// equivalent to "api/bookmarks"
router.route("/")
    .get(bookmarkcontroller.getAllbookmark)
    .post(bookmarkcontroller.addBookmark);


// equivalent to "api/bookmarks/user/:id"
router.route("/user/:id")
    .get(bookmarkcontroller.getBookmarkByUser)


// equivalent to "api/bookmarks/:id"
router.route("/:id")
    .get(bookmarkcontroller.getBookmark)
    .delete(bookmarkcontroller.deleteBookmark)

// equivalent to "api/bookmarks/listing/:id"
router.route("/listing/:id")
  .delete(bookmarkcontroller.deleteBookmarkByListing)

    module.exports = router;

