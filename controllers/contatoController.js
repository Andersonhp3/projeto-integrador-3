const path = require('path')
const fs = require('fs')


const contatoController = {
    showContato: (req, res) => {
        res.render("contato", {
            title: 'contato',
            css: 'contato'
        })
    }
}

module.exports = contatoController;