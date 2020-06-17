const path = require('path')
const fs = require('fs')

const {
    Contato
} = require("../models");


const contatoController = {
    showContato: (req, res) => {
        let usuario = req.session.usuario;
        res.render("contato", {
            title: 'Contato',
            css: 'contato',
            usuario
        })
    },
    mandarMensagem: async (req, res) => {
        let {
            nome,
            email,
            mensagem
        } = req.body;
        await Contato.create({nome, email, mensagem})
            .then()
            .catch((err) => console.log(err));

        res.redirect('/contato?sucesso=true')
    }
}

module.exports = contatoController;