const express = require('express');
const router = express.Router();

const LojaController = require('../controllers/lojaController');

router.get('/', LojaController.detalheProduto);
router.get('/detalheProduto', LojaController.showProduto);
router.get('/categoriaPet', LojaController.showCategoriaPet);
router.get('/categoriaProduto', LojaController.showCategoriaProduto);
router.post('/novo', LojaController.novoProduto);
router.post('/atualizar', LojaController.atualizarProduto);
router.get('/desativar', LojaController.desativar);


module.exports = router;