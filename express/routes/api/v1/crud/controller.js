const create = (req, res) => {
  const body = req.body;

  res.json({
    message: "create new",
    ...body,
  });
};

const deleteOne = (req, res) => {
  const { id, kind } = req.params;

  res.json({
    message: "delete one",
    kind,
    id,
  });
};

const readAll = (req, res) => {
  const { kind } = req.params;

  res.json([
    {
      message: "read all",
      kind,
    },
  ]);
};

const readOne = (req, res) => {
  const { id, kind } = req.params;

  res.json({
    message: "read one",
    kind,
    id,
  });
};

const update = (req, res, next) => {
  const { id, kind } = req.params;

  res.json({
    message: "update one",
    kind,
    id,
  });
};

module.exports = {
  create,
  deleteOne,
  readAll,
  readOne,
  update,
};
