const express = require("express");
const app = express();
const PORT = 3001;

// Middleware, always receives (req, res, next). res is sent back with new tricks learned. next is called to proceed
app.use((req, res, next) => {
  console.log("In the Middleware!");
  next();
});

app.use((req, res, next) => {
  res.send("<h1>Hello from Express Middleware!</h1>");
});

app.listen(PORT);
console.log(`Listening on port: ${PORT}`);
