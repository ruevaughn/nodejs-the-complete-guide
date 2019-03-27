const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3001;

// Middleware, always receives (req, res, next). res is sent back with new tricks learned. next is called to proceed
app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", (req, res, next) => {
//   console.log(`${Date.now("%d")} - ${req.url}`);
//   next();
// });

app.use("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add Product</button></input></form>"
  );
});

app.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(PORT);
console.log(`Listening on port: ${PORT}`);
