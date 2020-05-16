const express = require('express');
const router = express.Router();

/* Controllers */
const homeController = require('../controllers/homeController');
const loginController = require('../controllers/loginController');


/* GET home page. */
router.get('/home', homeController.home);

/* GET Login */
router.get('/login', loginController.view);


module.exports = router;
