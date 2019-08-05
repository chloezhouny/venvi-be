const router = require("express").Router();
const usercontroller = require("../../controller/user-controller");




// equivalent to "api/users"
router.route("/")

    .get(usercontroller.getAllUsers)
    .post(usercontroller.addUser);

// equivalent to "api/users/:id"
router.route("/:id")

    .get(usercontroller.getUser)
    .put(usercontroller.editUser);


// equivalent to "api/users/profilephoto"
router.route("/profilephoto")
    .post(usercontroller.updatePhoto);



// router.route("/email/:email")
// 	.get(usercontroller.getUserEmail);


module.exports = router;



