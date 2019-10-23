const { notAllowed }=require("./tools");
const express = require("express");
const v1 = require("./v1");

const router = express.Router();

router.use("/v1", v1);
router.all("*", notAllowed);

module.exports = router;
