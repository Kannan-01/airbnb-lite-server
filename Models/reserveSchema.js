const mongoose = require("mongoose");

const reserveSchema = new mongoose.Schema({
  checkin: {
    type: String,
    required: true,
  },
  checkout: {
    type: String,
    required: true,
  },
  guests: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  propertyId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const reservations = mongoose.model("reservations", reserveSchema);

module.exports = reservations;
