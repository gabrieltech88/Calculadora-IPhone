const express = require('express');
const usuarios = require('./usuarioRoutes.js');
const auth = require('./authRoutes.js')
const pages = require('./pageRoutes.js')
const cors = require('cors')
const path = require('path')

module.exports = app => {
	app.use(express.static(path.join(__dirname, '../../public/pages')))
	app.use(cors());
	app.use(express.json(), usuarios, auth, pages);
}