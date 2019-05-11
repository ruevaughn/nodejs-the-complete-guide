const express = require("express");

const router = express.Router();

const cartController = require("../controllers/cart");

router.get("/cart", cartController.getCart);
router.get("/checkout", cartController.getCheckout);

module.exports = router;
