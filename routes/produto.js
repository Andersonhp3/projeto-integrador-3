const express = require('express');
const router = express.Router();

const LojaController = require('../controllers/lojaController');

router.get('/detalheProduto', LojaController.showProduto);

module.exports = router;