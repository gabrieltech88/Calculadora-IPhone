const express = require('express');
const usuarios = require('./usuarioRoutes.js');
const auth = require('./authRoutes.js')
const pages = require('./pageRoutes.js')
const cors = require('cors')
const cookieParser = require('cookie-parser');
const path = require('path')

module.exports = app => {
	app.use(express.urlencoded({ extended: true }));
	app.use(express.json());
	app.use(cookieParser())	
	app.use(cors());
	app.use(pages);
	app.use(usuarios);
	app.use(auth);
	app.use(express.static(path.join(__dirname, '../../public')))
}
