const express = require("express");
const PORT = 3002;
const app = express();

app.use("/add-user", (req, res, next) => {
  res.write("<h1>Add User Page</h1>");
});

app.use("/", (req, res, next) => {
  res.write("<h1>HomePage</h1>");
});

app.listen(PORT);
console.log(`Assignment 2: Listening on port ${PORT}`);
