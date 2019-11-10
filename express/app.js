const errorHandler = require("./tools/errorHandler");
const express = require("express");
const mongoDB = require("./mongo");
const routes = require("./routes");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(routes);
app.use(errorHandler);

mongoDB.connect();

module.exports = app;
