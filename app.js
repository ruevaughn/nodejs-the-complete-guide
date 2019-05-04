const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// Routes
const productsData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorsController = require("./controllers/error");

// Runtime Variables
const PORT = 3001;
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Middleware, always receives (req, res, next). res is sent back with new tricks learned. next is called to proceed
// app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", productsData);
app.use(shopRoutes);

app.use(errorsController.get404);

app.listen(PORT);
console.log(`Listening on port: ${PORT}`);
