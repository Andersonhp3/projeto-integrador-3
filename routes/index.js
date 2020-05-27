const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');

/* Controllers */
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const adocaoController = require('../controllers/adocaoController');
const lojaController = require('../controllers/lojaController');
const contatoController = require('../controllers/contatoController');
const verificaUsuarioLogado = require('../middlewares/verificaUsuarioLogado');


/* homeController */
router.get('/', homeController.home);
router.get('/home', homeController.home)


// adocaoController
router.get('/homeAdocao',adocaoController.home)

// lojaController
router.get('/homeLoja',lojaController.home)

// contatoController
router.get('/contato',contatoController.showContato)

router.get('/login', authController.showLogin);
router.post('/login', authController.login);

router.get('/cadastro', authController.showCadastro);
router.post('/cadastro', multer.single('imagem'), authController.cadastro);

module.exports = router;