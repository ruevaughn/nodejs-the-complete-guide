const express = require("express");
const PORT = 3002;
const app = express();

app.use("/users", (req, res, next) => {
  res.send("<h1>Users Page</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Homepage</h1>");
});

app.listen(PORT);
console.log(`Assignment 2: Listening on port ${PORT}`);
