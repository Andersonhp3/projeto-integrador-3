const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');

const authController = require('../controllers/authController');

/* authController */
router.get('/login', authController.showLogin);
router.get('/cadastro', authController.showCadastro);
router.post('/cadastro', multer.single('imagem'), authController.cadastro);

module.exports = router;