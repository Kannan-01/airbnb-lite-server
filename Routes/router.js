const express = require("express");
const router = new express.Router();
const userController = require("../Controllers/userController");
const PropertyController = require("../Controllers/propertyController");
const wishlistController = require("../Controllers/wishlistController");
const jwtMiddleware = require("../Middlewares/jwtMiddleware");

// login user
router.post("/login", userController.userLogin);

// register user
router.post("/register", userController.register);

// host your house
router.post("/host", jwtMiddleware, PropertyController.host);

// view all properties
router.get("/properties", PropertyController.properties);

// view product
router.get("/view/:id", PropertyController.viewProperty);

// add to wishlist
router.post("/wishlist", jwtMiddleware, wishlistController.addToWishlist);

// get wishlist
router.get("/wishlist/get", jwtMiddleware, wishlistController.getWishlist);

// delete wishlist item
router.delete(
  "/wishlist/delete/:id",
  jwtMiddleware,
  wishlistController.deleteWishlistItem
);

// account details
router.get("/account", jwtMiddleware, userController.userDetails);

// update user
router.put("/update", jwtMiddleware, userController.editUser);

// view host details
router.get("/host/view/:userid", userController.hostDetails);

// view payment
router.get("/payment/:id", PropertyController.viewProperty);

router.get("/hostings", jwtMiddleware, PropertyController.viewHostings);

module.exports = router;
