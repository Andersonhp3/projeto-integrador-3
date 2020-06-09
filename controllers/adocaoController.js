const path = require('path')
const fs = require('fs')

const {Pet, ImagemPet} = require('../models')


const adocaoController = {
    home: async (req, res) => {

        let pets = await Pet.findAll({include: ['imagem']})

        console.log(pets)

        res.render("homeAdocao", {
            title: 'Adoção',
            css: 'homeAdocao',
            nav: 'navAdocao',
            pets
        })
    },
    detalheAdocao: (req, res) => {
        res.render('detalheAdocao', {
            title: 'Detalhes do pet',
            css: 'detalheAdocao',
            nav: '',
        })
    }
}

module.exports = adocaoController;