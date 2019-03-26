const express = require("express");
const PORT = 3002;
const app = express();

app.use("/", (req, res, next) => {
  console.log("First request matching all routes");
  res.write("<h1>Header</h1>");
  next();
});

app.use("/add-user", (req, res, next) => {
  res.write("<h1>Add User Page</h1>");
});

app.listen(PORT);
console.log(`Assignment 2: Listening on port ${PORT}`);
