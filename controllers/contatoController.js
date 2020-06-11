const path = require('path')
const fs = require('fs')


const contatoController = {
    showContato: (req, res) => {
        let usuario = req.session.usuario;
        res.render("contato", {
            title: 'Contato',
            css: 'contato',
            usuario
        })
    }
}

module.exports = contatoController;