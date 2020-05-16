const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

const cadastroController = {
    view: (req, res) => {
        res.render('cadastro', {
            title: 'Tela de Cadastro',
            error: false
        });
    }
};

module.exports = cadastroController;