const express = require('express');
const router = express.Router();

/* Controllers */
const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');



/* homeController */
router.get('/home', homeController.home);

/* authController */
router.get('/login', authController.viewLogin);
router.get('/cadastro', authController.viewCadastro);



module.exports = router;
