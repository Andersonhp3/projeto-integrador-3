const path = require('path')
const fs = require('fs')

const {
    Pet,
    ImagemPet,
    CategoriaPet
} = require('../models')


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
    },
    novaAdocao: async (req, res) => {
        let usuario = req.session.usuario;

        let usuario_id = usuario.id

        let {
            nome,
            descricao,
            raca,
            idade,
            categoria,
            contato,
            imagemb64
        } = req.body;

        async function decode_base64(base64str, filename) {
            let buff = Buffer.from(base64str, 'base64');
            let file = ('/images/pets/' + Date.now().toString() + '-' + filename);
            fs.writeFile('./public' + file, buff, (error) => {
                if (error) {
                    throw error;
                } else {
                    return true;
                };
            });
            return file;
        };

        if (!imagemb64) {
            var imagem = "/images/pet/default.png";
        } else {
            let filetype = imagemb64.split(';base64,')[0].split('/')[1];
            let imgb64 = imagemb64.split(';base64,').pop();
            var imagem = await decode_base64(imgb64, ('pet.' + filetype));
        }

        categoria = await CategoriaPet.findOne({
            where: {
                categoria
            }
        })

        let categoria_pet_id = categoria.id;

        let novaAdocao = {
            id: null,
            nome,
            idade,
            descricao,
            contato,
            raca,
            categoria_pet_id,
            usuario_id
        }

        let pet_id = await Pet.create(novaAdocao)
        .then()
        .catch((err) => console.log(err));
        pet_id = pet_id.dataValues.id

        await ImagemPet.create({
            id: null,
            imagem,
            pet_id
        })
        .then()
        .catch((err) => console.log(err));

        res.redirect('/usuario/doar');
    }
}

module.exports = adocaoController;