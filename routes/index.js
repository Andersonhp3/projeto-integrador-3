var express = require('express');
var router = express.Router();

var homeController = require('../controllers/homeController')

/* GET home page. */
router.get('/home', homeController.home);

module.exports = router;
