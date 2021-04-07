const cuid = require("cuid");
const db = require("../db");
const productCategories = require("../data/productCategories");

const productSchema = db.Schema({
  _id: { type: String, default: cuid },
  name: String,
  price: Number,
  description: String,
  imageUrl: String,
  category: {
    type: String,
    index: true,
    enum: productCategories,
  },
});

const Product = db.model("Product", productSchema);

module.exports = Product;
