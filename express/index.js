const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
const port = process.env.PORT;

app.listen(port, () => console.info("express server listening on %s", port));
