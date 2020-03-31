const { celebrate, Segments, Joi } = require("celebrate");
const connection = require("../../database/connection");

module.exports.inputs = celebrate({
  [Segments.BODY]: Joi.object().keys({
    id: Joi.string().required()
  })
});
