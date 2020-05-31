const path = require('path')
const fs = require('fs')


const adocaoController = {
    home: (req, res) => {
        res.render("homeAdocao", {
            title: 'Adoção',
            css: 'homeAdocao',
            nav: 'navAdocao'
        })
    },
    detalheAdocao: (req, res) => {
        res.render('detalheAdocao', {
            title: 'Detalhes do pet',
            css: 'detalheAdocao'
        })
    }
}

module.exports = adocaoController;