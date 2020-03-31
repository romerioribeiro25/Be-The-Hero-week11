const { celebrate, Segments, Joi } = require("celebrate");

module.exports.inputs = celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required()
  }).unknown()
});
