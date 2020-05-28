const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');

const authController = require('../controllers/authController');
const verificaUsuarioLogado = require('../middlewares/verificaUsuarioLogado');

/* authController */
router.get('/', verificaUsuarioLogado ,authController.perfil);
router.get('/perfil', verificaUsuarioLogado ,authController.perfil);
router.post('/cadastroEndereco', verificaUsuarioLogado, authController.cadastroEndereco)
router.get('/perfilVendas', verificaUsuarioLogado ,authController.perfilVendas);
router.get('/perfilCompras', verificaUsuarioLogado ,authController.perfilCompras);

module.exports = router;