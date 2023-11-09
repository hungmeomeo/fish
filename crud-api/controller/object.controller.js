const Object = require("../models/Object");

//const products= require('./../data/product'); // Adjust the import path based on your file structure

// Function to filter products by sale status
const getProductsByType = async (req, res) => {
    const typeTarget = req.params.cato;
    const product = await Object.find({ cato: typeTarget });
    res.json(product);
};

const getProductsOnSale = async (req, res) => {
  const product = await Object.find({ sale: true });
  res.json(product);
};

const getSaleProductsByCategory = async (req, res) => {
  const typeTarget = req.params.cato;
  const saleProducts = await Object.find({ sale: true, cato: typeTarget });
  res.json(saleProducts);
};

const getObject = async (req, res) => {
  if (req.params.id == "all") {
    const images = await Object.find();

    res.json(images);
  }
  else {
    const ids = req.params.id.split(";");

    // Validate IDs (check format, sanitize, etc)

    const validIds = ids.map((id) => parseInt(id));

    // Query database
    const images = await Object.find({
      id: { $in: validIds },
    });

    res.json(images);
  }
};


module.exports = {
  getObject,
  getProductsByType,
  getProductsOnSale,
  getSaleProductsByCategory,
};
