const express = require("express");

const router = express.Router();

const productController = require("../controllers/products");
const ordersController = require("../controllers/orders");

router.get("/", productController.getIndex);
router.get("/products", productController.getProducts);
router.get("/products/:productId", productController.getProduct);
router.get("/orders", ordersController.getOrders);

module.exports = router;
