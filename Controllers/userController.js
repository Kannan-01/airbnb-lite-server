const { default: mongoose } = require("mongoose");
const users = require("../Models/userModel");
const jwt = require("jsonwebtoken");

// registration of user
exports.register = async (req, res) => {
  console.log("inside userController register function");
  const { firstName, lastName, dateOfBirth, email, password } = req.body;
  try {
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      res.status(406).json("you already have an account!");
    } else {
      const newUser = new users({
        firstName,
        lastName,
        dateOfBirth,
        email,
        password,
        phoneNumber: "",
        emergencyNumber: "",
        address: "",
        userImage: "",
        idProof: "",
      });
      await newUser.save();
      res.status(200).json(newUser);
    }
  } catch (err) {
    res.status(401).json(`Register API Failed : ${err}`);
  }
};

// user login
exports.userLogin = async (req, res) => {
  console.log("inside userController login function");
  const { email, password } = req.body;
  try {
    const existingUser = await users.findOne({ email, password });
    if (existingUser) {
      const token = jwt.sign(
        { type: "user", userId: existingUser._id },
        process.env.JWT_SECRET_CODE
      );
      res.status(200).json({
        existingUser,
        token,
      });
    } else {
      res.status(404).json(`Incorrect Email / Password`);
    }
  } catch (err) {
    res.status(401).json(`Login API Failed , Error : ${err}`);
  }
};

// account details update
exports.editUser = async (req, res) => {
  const userId = req.payload;
  console.log("inside user edit function");
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    password,
    phoneNumber,
    emergencyNumber,
    address,
    userImage,
    idProof,
  } = req.body;
  try {
    const updateUser = await users.findByIdAndUpdate(
      { _id: userId },
      {
        firstName,
        lastName,
        dateOfBirth,
        email,
        password,
        phoneNumber,
        emergencyNumber,
        address,
        userImage,
        idProof,
      },
      { new: true }
    );
    await updateUser.save();
    res.status(200).json(updateUser.userImage);
  } catch (err) {
    res.status(401).json(`Request Failed , Error : ${err}`);
  }
};

// get account details
exports.userDetails = async (req, res) => {
  const userId = req.payload;
  try {
    const accountDetails = await users.findOne({ _id: userId });
    res.status(200).json(accountDetails);
  } catch (err) {
    res.status(401).json(err);
  }
};

// gethostdetails
exports.hostDetails = async (req, res) => {
  const { userid } = req.params;
  try {
    const hostDetails = await users.findOne({ _id: userid });
    res.status(200).json(hostDetails);
  } catch (err) {
    res.status(401).json(err);
  }
};
