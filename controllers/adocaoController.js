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
    detalheAdocao: async (req, res) => {

        let id = req.query.id

        let pet = await Pet.findByPk(id, {include: ['usuario', 'imagem']})

        console.log(pet)

        res.render('detalheAdocao', {
            title: 'Detalhes do pet',
            css: 'detalheAdocao',
            nav: '',
            pet
        })
    }
}

module.exports = adocaoController;