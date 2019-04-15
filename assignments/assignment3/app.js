const express = require("express");

const app = express();

const pageRoutes = require("./routes/users");

app.use(pageRoutes);

app.listen(3003);
