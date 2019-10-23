const errorHandler = require("./tools/errorHandler");
const express = require("express");
const routes = require("./routes");

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(routes);
app.use(errorHandler);

const port = 8080;

app.listen(port, () => console.info("server listening on %s", port));
