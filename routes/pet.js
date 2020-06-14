const express = require('express');
const router = express.Router();

const AdocaoController = require('../controllers/adocaoController');

router.get('/', AdocaoController.detalhePet);
router.get('/detalheAdocao', AdocaoController.detalheAdocao);
router.get('/pesquisa', AdocaoController.pesquisa);
router.post('/novo', AdocaoController.novaAdocao);
router.post('/atualizar', AdocaoController.atualizar);

module.exports = router;