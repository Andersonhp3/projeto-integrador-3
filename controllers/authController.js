const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

const authController = {
    login: (req, res) => {

    },

    cadastro: (req, res) => {

    },

    viewLogin: (req, res) => {
        res.render('login', {
            title: 'Tela de Login',
            error: false
        });
    },

    viewCadastro: (req, res) => {
        res.render('cadastro', {
            title: 'Tela de Cadastro',
            error: false
        });
    }
};

module.exports = authController;