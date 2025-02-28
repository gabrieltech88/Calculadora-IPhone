const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const autenticado = require('../middlewares/autenticado.js');

const router = Router();


router.post('/auth', UsuarioController.login);
router.get('/auth/logout', UsuarioController.logout);

module.exports = router;