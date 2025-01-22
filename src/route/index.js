const express = require("express");
const usuarios = require("./UsuarioRoutes.js");

const app = express();
app.use(express.json());
app.use(usuarios);

module.exports = app;