const { Router } = require('express');
const PageController = require('../controllers/pageController.js');
const autenticado = require('../middlewares/autenticado.js');

const router = Router();

router.get('/', PageController.getLogin);
router.get('/calculadora', autenticado, PageController.getIndex);
router.get('/signup', PageController.getSignup);


module.exports = router;