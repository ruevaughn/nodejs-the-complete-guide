const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// Routes
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Runtime Variables
const PORT = 3001;
const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Middleware, always receives (req, res, next). res is sent back with new tricks learned. next is called to proceed
// app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(PORT);
console.log(`Listening on port: ${PORT}`);
