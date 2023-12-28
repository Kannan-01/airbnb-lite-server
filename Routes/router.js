const express = require('express');
const router = new express.Router();
const userController=require("../Controllers/userController");
const PropertyController=require("../Controllers/propertyController");

// login user
router.post("/login", userController.userLogin);

// register user
router.post("/register", userController.register);

// host your house
router.post("/host",PropertyController.host);

// view all properties
router.get("/properties",PropertyController.properties);


module.exports = router;
