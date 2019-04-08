const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Runtime Variables
const PORT = 3001;
const app = express();

// Middleware, always receives (req, res, next). res is sent back with new tricks learned. next is called to proceed
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendfile(path.join(__dirname, "./views/404.html"));
});

app.listen(PORT);
console.log(`Listening on port: ${PORT}`);
