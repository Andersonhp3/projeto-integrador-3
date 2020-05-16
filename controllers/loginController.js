const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

const loginController = {
    login: (req, res) => {},
    view: (req, res) => {
        res.render('login', {
            title: 'Tela de Login',
            error: false
        });
    }
};

module.exports = loginController;