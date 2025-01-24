const express = require("express");
const usuarios = require("./UsuarioRoutes.js");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.json(), usuarios)

module.exports = app;