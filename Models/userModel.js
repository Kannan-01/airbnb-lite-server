const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid Email",
    }
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
  },
  emergencyNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  userImage: {
    type: String,
  },
  idProof: {
    type: String,
  },
  type: {
    type: String,
  },
});

const users = mongoose.model("users", userSchema);

module.exports = users;
