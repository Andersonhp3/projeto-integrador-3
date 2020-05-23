const path = require('path')
const fs = require('fs')


const homeController = {
    home: (req, res) => {
        res.render(
            'home', {
                title: 'Home',
                css: 'index'
            }
        );
    }
    
}

module.exports = homeController