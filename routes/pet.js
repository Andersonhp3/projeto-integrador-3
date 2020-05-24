const express = require('express');
const router = express.Router();

const AdocaoController = require('../controllers/adocaoController');

router.get('/detalheAdocao', AdocaoController.detalheAdocao);

module.exports = router;