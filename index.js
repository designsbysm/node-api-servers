const errorHandler = require("./tools/errorHandler");
const dotenv = require("dotenv");
const express = require("express");
const routes = require("./routes");

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(routes);
app.use(errorHandler);

app.listen(port, () => console.info("server listening on %s", port));
