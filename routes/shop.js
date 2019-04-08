const path = require('path');
const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
  res.sendfile(path.join(__dirname, "../views/shop.html"));
});

module.exports = router;
