const crud = require("./crud/router");
const express = require("express");

const router = express.Router();
router.use("/:kind", crud);

module.exports = router;
