const express = require("express");

const OngController = require("./app/controllers/OngController");
const IncidentController = require("./app/controllers/IncidentController");
const ProfileController = require("./app/controllers/ProfileController");
const SessionController = require("./app/controllers/SessionController");

const validateOngCreate = require("./app/validators/validateOngCreate");
const validateIncidentIndex = require("./app/validators/validateIncidentIndex");
const validateIncidentCreate = require("./app/validators/validateIncidentCreate");
const validateIncidentDelete = require("./app/validators/validateIncidentDelete");

const validateProfileIndex = require("./app/validators/validateProfileIndex");

const validateSessionCreate = require("./app/validators/validateSessionCreate");

const routes = express.Router();

routes.get("/ongs", OngController.index);
routes.post("/ongs", validateOngCreate.inputs, OngController.create);

routes.get(
  "/incidents",
  validateIncidentIndex.inputs,
  IncidentController.index
);

routes.post(
  "/incidents",
  validateIncidentCreate.inputs,
  IncidentController.create
);

routes.delete(
  "/incidents/:id",
  validateIncidentDelete.inputs,
  validateIncidentDelete.requests,
  IncidentController.delete
);

routes.get("/profile", validateProfileIndex.inputs, ProfileController.index);

routes.post(
  "/sessions",
  validateSessionCreate.inputs,
  SessionController.create
);

module.exports = routes;
