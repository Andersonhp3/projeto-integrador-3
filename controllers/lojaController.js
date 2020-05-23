const path = require('path')
const fs = require('fs')


const lojaController = {
    home: (req, res) => {
        res.render("homeLoja", {
            title: 'Loja-home',
            css: 'homeLoja'
        })
    }
}

module.exports = lojaController;