const http = require("http");
const express = require("express");
const app = express();
const PORT = 3001;

// Middleware, always receives (req, res, next). res is sent back with new tricks learned. next is called to proceed
app.use((req, res, next) => {
  console.log("In the Middleware!");
  next();
});

app.use((req, res, next) => {
  console.log("In another Middleware!");
});

const server = http.createServer(app);
server.listen(PORT);
