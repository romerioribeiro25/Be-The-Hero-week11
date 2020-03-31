const { celebrate, Segments, Joi } = require("celebrate");

module.exports.inputs = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
});
