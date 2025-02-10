const { Router } = require('express');
const PageController = require('../controllers/pageController.js');

const router = Router();

router.get('/calculadora', PageController.getIndex);
router.get('/signup', PageController.getSignup);
router.get('/', PageController.getLogin);


module.exports = router;