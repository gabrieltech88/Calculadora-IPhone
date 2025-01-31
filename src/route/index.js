const express = require("express");
const cors = require('cors')
const usuarios = require("./UsuarioRoutes");

const app = express();
app.use(cors({ origin: 'http://127.0.0.1:5500' }));
app.use(express.json(), usuarios)

module.exports = app;