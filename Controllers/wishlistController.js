const wishlists = require("../Models/wishlistModel");

// add to wishlist
exports.addToWishlist = async (req, res) => {
  //   get userid
  const userId = req.payload;
  const {
    _id:id,
    title,
    state,
    district,
    city,
    price,
    image,
    description,
    category,
  } = req.body;
  try {
    const existingProduct = await wishlists.findOne({ id, userId });
    if (existingProduct) {
      res.status(406).json("Already in your wishlist");
    } else {
      const newProduct = new wishlists({
        id,
        title,
        state,
        district,
        city,
        price,
        image,
        description,
        category,
        userId,
      });
      await newProduct.save();
      res.status(200).json(newProduct);
    }
  } catch (err) {
    res.status(401).json(err);
  }
};

// get wishlist
exports.getWishlist= async (req, res) => {
    const userId = req.payload;
    try {
      const allWishlist = await wishlists.find({ userId });
      res.status(200).json(allWishlist);
    } catch (err) {
      res.status(401).json(err);
    }
  };

  exports.deleteWishlistItem = async (req, res) => {
    const { id } = req.params;
    try {
      const removeItem = await wishlists.findByIdAndDelete({_id: id });
      res.status(200).json(removeItem);
    } catch (err) {
      res.status(401).json(err);
    }
  };