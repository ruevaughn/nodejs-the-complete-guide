const path = require('path');
const express = require("express");
const router = express.Router();

router.use("/shop", (req, res, next) => {
  res.sendfile(path.join(__dirname, "../views/shop.html"));
});

module.exports = router;
