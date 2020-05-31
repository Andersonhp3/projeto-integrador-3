const path = require('path')
const fs = require('fs')


const homeController = {
    home: (req, res) => {
        let usuario = req.session.usuario
        res.render(
            'home', {
                title: 'Home',
                css: 'index',
                nav: 'navHome',
                usuario
            }
        );
    }
    
}

module.exports = homeController