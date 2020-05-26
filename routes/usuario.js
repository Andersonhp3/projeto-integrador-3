const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');

const authController = require('../controllers/authController');
const verificaUsuarioLogado = require('../middlewares/verificaUsuarioLogado')

/* authController */
router.get('/login', authController.showLogin);
router.post('/login', authController.login);
router.get('/cadastro', authController.showCadastro);
router.post('/cadastro', multer.single('imagem'), authController.cadastro);
router.get('/perfil', verificaUsuarioLogado ,authController.perfil);
router.get('/perfilVendas', verificaUsuarioLogado ,authController.perfilVendas);
router.get('/perfilCompras', verificaUsuarioLogado ,authController.perfilCompras);

module.exports = router;