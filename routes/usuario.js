const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');

const authController = require('../controllers/authController');
const verificaUsuarioLogado = require('../middlewares/verificaUsuarioLogado');

/* authController */
router.get('/', verificaUsuarioLogado ,authController.showPerfil);
router.get('/perfil', verificaUsuarioLogado ,authController.showPerfil);
router.post('/cadastroEndereco', verificaUsuarioLogado, authController.cadastroEndereco)
router.get('/vendas', verificaUsuarioLogado ,authController.showVendas);
router.get('/compras', verificaUsuarioLogado ,authController.showCompras);
router.get('/vender', verificaUsuarioLogado ,authController.showVender);
router.get('/doar', verificaUsuarioLogado ,authController.showDoar);



module.exports = router;