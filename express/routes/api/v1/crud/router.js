const { create, deleteOne, readAll, readOne, update } = require("./controller");
const express = require("express");

const router = express.Router({ mergeParams: true });

router.route("/")
  .get(readAll)
  .post(create);

router.route("/:id")
  .delete(deleteOne)
  .get(readOne)
  .put(update);

module.exports = router;
