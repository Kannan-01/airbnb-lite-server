const properties = require("../Models/propertyModel");

exports.host = async (req, res) => {
  const userId = req.payload;
  const { title, state, district, city, price, image, description, category } =
    req.body;
  try {
    const newProperty = new properties({
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
    await newProperty.save();
    res.status(200).json("property successfully added");
  } catch (err) {
    console.log(err);
    res.status(401).json(err);
  }
};

exports.properties = async (req, res) => {
    try {
      const allProperties = await properties.find();
      res.status(200).json(allProperties);
    } catch (err) {
      res.status(401).json(err);
    }
  };

  exports.viewProperty = async (req, res) => {
    const { id } = req.params;
    try {
      const property = await properties.findOne({_id:id});
      console.log(property);
      res.status(200).json(property);
    } catch (err) {
      res.status(401).json(err);
    }
  };