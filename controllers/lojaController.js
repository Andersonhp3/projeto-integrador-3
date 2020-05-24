const path = require('path')
const fs = require('fs')


const lojaController = {
    home: (req, res) => {
        res.render("homeLoja", {
            title: 'Loja-home',
            css: 'homeLoja'
        })
    },
    showProduto: (req, res) => {
        res.render('produto', {
            title: 'Detalhes do Produto',
            css: 'produto'
        })
    }
}

module.exports = lojaController;