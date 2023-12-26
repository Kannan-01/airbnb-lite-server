const express = require('express');
const router = new express.Router();
const userController=require("../Controllers/userController")

// register user
router.post("/user/register", userController.register);
module.exports = router;

// login user
router.post("/user/login", userController.userLogin);