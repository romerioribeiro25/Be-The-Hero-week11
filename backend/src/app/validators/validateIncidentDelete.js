const { celebrate, Segments, Joi } = require("celebrate");
const connection = require("../../database/connection");

module.exports.inputs = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
});

module.exports.requests = async function(req, res, next) {
  const { id } = req.params;
  const ong_id = req.headers.authorization;

  const incident = await connection("incidents")
    .where("id", id)
    .select("ong_id")
    .first();

  if (!incident) {
    return res.status(404).json({ error: "Incident not found" });
  }

  if (incident.ong_id !== ong_id) {
    return res.status(401).json({ error: "Operation not permitted" });
  }

  return next();
};
