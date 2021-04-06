const { listProducts } = require("../services/productService");
const productCategories = require("../data/productCategories");

async function renderProductsList(req, res, next) {
  try {
    const items = await listProducts();

    const itemsToShow = req.query.category
      ? items.filter((item) => item.category === req.query.category)
      : items;
    res.render("home", {
      layout: req.layout,
      items: itemsToShow,
      productCategories,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  renderProductsList,
};
