const express = require('express');
const UsuarioController = require("../controller/UsuarioController.js");

const rotas = express.Router();

rotas.get("/usuarios", UsuarioController.buscaTodos);

module.exports = rotas;