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
router.post("/host",jwtMiddleware, PropertyController.host);

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

module.exports = router;
