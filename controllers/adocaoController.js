const path = require('path')
const fs = require('fs')


const adocaoController = {
    home: (req, res) => {
        res.render("homeAdocao", {
            title: 'Adocao-home',
            css: 'homeAdocao'
        })
    }
}

module.exports = adocaoController;