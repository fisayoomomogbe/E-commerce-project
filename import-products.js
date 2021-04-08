const db = require("./db.js");
const { createProduct } = require("./services/productService");

require("dotenv").config();
const products = require("./products.json");
const Product = require("./models/product.js");

(async function () {
  await Product.insertMany(products)(() => {
    console.log("Saved");
  })
    .catch((err) => console.error(`Failed to insert documents: ${err}`))
    .finally(() => {
      db.disconnect();
    });
})();
