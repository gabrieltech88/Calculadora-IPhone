const express = require('express');
const usuarios = require('./usuarioRoutes.js');
const auth = require('./authRoutes.js')
const cors = require('cors')

module.exports = app => {
	app.use(cors());
	app.use(express.json(), usuarios, auth);
}