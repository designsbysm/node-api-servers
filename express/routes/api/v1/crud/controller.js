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
    id,
    kind,
    message: "delete one",
  });
};

const readAll = (req, res) => {
  const { kind } = req.params;

  res.json([
    {
      kind,
      message: "read all",
    },
  ]);
};

const readOne = (req, res) => {
  const { id, kind } = req.params;

  res.json({
    id,
    kind,
    message: "read one",
  });
};

const update = (req, res) => {
  const { id, kind } = req.params;

  res.json({
    id,
    kind,
    message: "update one",
  });
};

module.exports = {
  create,
  deleteOne,
  readAll,
  readOne,
  update,
};
