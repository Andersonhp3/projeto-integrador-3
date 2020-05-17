const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');


const authController = {
    login: (req, res) => {

    },

    cadastro: async (req, res, next) => {
        console.log(req.body);
        console.log(req.file);
        if(req.file){
            return res.send(req.file);
        }
        return res.send('Houve erro no upload!');
    },

    showLogin: (req, res) => {
        res.render('login', {
            title: 'Tela de Login',
            error: false
        });
    },

    showCadastro: (req, res) => {
        res.render('cadastro', {
            title: 'Tela de Cadastro',
            error: false
        });
    }
};

module.exports = authController;