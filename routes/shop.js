const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  const products = adminData.products;
  res.render('shop', { 
    prods: products, 
    hasProducts: products.length > 0, 
    docTitle: 'Shop', 
    path: '/', 
    pageTitle: 'Shop',
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
