const Boom = require("@hapi/boom");

module.exports = (err, req, res, next) => {
  let boom = {};

  if (err.isBoom) {
    boom = err;
  } else {
    if (err instanceof Error) {
      boom = Boom.boomify(err, {
        statusCode: err.statusCode || 400,
      });
    } else if (typeof err === "string") {
      boom = new Boom(err, {
        statusCode: 400,
      });
    } else {
      boom = new Boom(null, {
        statusCode: 499,
      });
      boom.output.payload.error = err;
    }
  }

  const { statusCode, payload } = boom.output;

  res.status(statusCode)
    .json(payload);
};
