const path = require('path')
const fs = require('fs')


const contatoController = {
    showContato: (req, res) => {
        res.render("contato", {
            title: 'Contato',
            css: 'contato',
        })
    }
}

module.exports = contatoController;