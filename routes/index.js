const express = require('express');
const router = express.Router();

/* Controllers */
const homeController = require('../controllers/homeController');
const loginController = require('../controllers/loginController');
const cadastroController = require('../controllers/cadastroController');



/* GET Home */
router.get('/home', homeController.home);

/* GET Login */
router.get('/login', loginController.view);

/* GET Cadastro */
router.get('/cadastro', cadastroController.view);



module.exports = router;
