const rotas = require("./route/UsuarioRoutes.js");
const express = require("express");
const path = require("path");


const app = express();

const caminhoAtual = __dirname;
const diretorioPublico = path.join(caminhoAtual, "../client/public/");

app.use(express.static(diretorioPublico));
app.use(require('./route/UsuarioRoutes.js'));


module.exports = app;