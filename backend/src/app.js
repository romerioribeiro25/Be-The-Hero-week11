const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

// Migration CLI
// 1 - npx knex migrate:make create_ongs
// Criar table
// 2 - npx knex migrate:latest

// 3 - npx knex migrate:make create_incidents
