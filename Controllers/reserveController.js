const { default: mongoose } = require("mongoose");
const reservations = require("../Models/reserveSchema");

// registration of user
exports.reserve = async (req, res) => {
  const userId = req.payload;

  console.log("inside reserveController reserve function");
  const {
    checkin,
    checkout,
    guests,
    amount,
    propertyId,
    title,
    state,
    district,
    city,
    image,
    category,
  } = req.body;
  try {
    const newReserve = new reservations({
      checkin,
      checkout,
      guests,
      amount,
      propertyId,
      userId,
      title,
      state,
      district,
      city,
      image,
      category,
    });
    await newReserve.save();
    res.status(200).json(newReserve);
  } catch (err) {
    res.status(401).json(` API Failed : ${err}`);
  }
};

// get reservaton details
exports.getReservations = async (req, res) => {
  const userId = req.payload;
  try {
    const reserveDetails = await reservations.find({ userId });
    res.status(200).json(reserveDetails);
  } catch (err) {
    res.status(401).json(err);
  }
};
