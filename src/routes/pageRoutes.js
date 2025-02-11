const { Router } = require('express');
const PageController = require('../controllers/pageController.js');

const router = Router();

router.get('/', PageController.getLogin);
router.get('/calculadora', PageController.getIndex);
router.get('/signup', PageController.getSignup);


module.exports = router;