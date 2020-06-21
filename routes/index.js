const express = require('express');
const router = express.Router();

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
router.get('/adocao',adocaoController.home)

// lojaController
router.get('/loja',lojaController.home)
router.get('/comprar', lojaController.comprar);
router.get('/carrinho', verificaUsuarioLogado, lojaController.carrinho);
router.get('/mudaQtd', verificaUsuarioLogado, lojaController.mudaQtd);
router.post('/deletaritemcarrinho', lojaController.deletarItemCarrinho);

// contatoController
router.get('/contato',contatoController.showContato);
router.post('/contato',contatoController.mandarMensagem);

router.get('/login', authController.showLogin);
router.post('/login', authController.login);

router.get('/cadastro', authController.showCadastro);
router.post('/cadastro', authController.cadastro);

router.get('/sair', authController.sair)

// Pesquisa
router.get('/pesquisa',homeController.pesquisa);

module.exports = router;