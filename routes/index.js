const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');

/* Controllers */
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');

/* homeController */
router.get('/home', homeController.home);

/* authController */
router.get('/login', authController.showLogin);
router.get('/cadastro', authController.showCadastro);
router.post('/cadastro', multer.single('imagem'), authController.cadastro);

module.exports = router;