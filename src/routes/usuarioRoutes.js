const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController.js');
const autenticado = require('../middlewares/autenticado.js');

const router = Router();

router.get('/usuarios', autenticado, UsuarioController.get);
router.post('/usuarios', UsuarioController.register);

module.exports = router;