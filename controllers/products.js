const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      docTitle: "All Products",
      path: "/products",
      pageTitle: "Shop"
    });
  });
};

exports.getProduct = (req, res, next) => {
  const productId = req.params.productId;
  console.log(productId);
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      prods: products,
      docTitle: "Shop",
      path: "/",
      pageTitle: "Shop"
    });
  });
};
