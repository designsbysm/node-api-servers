const Boom = require("@hapi/boom");

const notAllowed = (req, res, next) =>
  next(Boom.notFound(`Not Found: ${req.url}`));

module.exports = {
  notAllowed,
};
