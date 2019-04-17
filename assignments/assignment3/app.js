const express = require("express");

const app = express();
const path = require("path");

const pageRoutes = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));
app.use(pageRoutes);

app.listen(3003);
