const express = require('express');
const router = express.Router();
const verificaUsuarioLogado = require('../middlewares/verificaUsuarioLogado');

const AdocaoController = require('../controllers/adocaoController');

router.get('/', AdocaoController.detalhePet);
router.get('/detalheAdocao', AdocaoController.detalheAdocao);
router.get('/pesquisa', AdocaoController.pesquisa);
router.post('/novo', AdocaoController.novaAdocao);
router.post('/atualizar', AdocaoController.atualizar);
router.get('/deletar', verificaUsuarioLogado, AdocaoController.deletar);

module.exports = router;