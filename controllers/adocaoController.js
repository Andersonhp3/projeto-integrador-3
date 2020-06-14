const path = require('path')
const fs = require('fs')

const {
    Pet,
    ImagemPet,
    CategoriaPet
} = require('../models')


const adocaoController = {
    pesquisa: async (req, res) => {
        let categoria = req.query

        categoria = await CategoriaPet.findOne({
            where: {
                categoria: categoria.categoria
            }
        })

        categoria_pet_id = categoria.dataValues.id

        let categorias = await CategoriaPet.findAll()

        let pets = await Pet.findAll({
            where: {
                categoria_pet_id
            },
            include: ['imagem']
        });

        res.render("homeAdocao", {
            title: 'Adoção',
            css: 'homeAdocao',
            pets,
            categorias
        });
    },
    home: async (req, res) => {
        let usuario = req.session.usuario;

        let categorias = await CategoriaPet.findAll()
        let pets = await Pet.findAll({
            where: {
                adotado: 0
            },
            include: ['imagem']
        });

        res.render("homeAdocao", {
            title: 'Adoção',
            css: 'homeAdocao',
            pets,
            usuario,
            categorias
        });
    },
    detalheAdocao: async (req, res) => {

        let id = req.query.id

        let pet = await Pet.findByPk(id, {
            include: ['usuario', 'imagem']
        })

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
            genero,
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
            genero,
            dataCadastro: new Date().toString(),
            adotado: false,
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
    },
    detalhePet: async (req, res) => {
        let id = req.query.id;
        let pet = await Pet.findByPk(id, {
            include: ['usuario', 'imagem']
        })
        res.send(pet)
    },
    atualizar: async (req, res) => {
        let {
            id,
            nome,
            descricao,
            contato,
            adotado,
            dataAdotado
        } = req.body;

        console.log(req.body);

        if(dataAdotado == ''){
            dataAdotado = null;
        }
        
        if(adotado == 'on'){
            adotado = true;
        } else {
            adotado = false;
        };

        let update = await Pet.update({
            nome,
            descricao,
            contato,
            adotado,
            dataAdotado
        }, {
            where: {
                id
            }
        })

        
        res.redirect('/usuario/doacoes')
    }
}

module.exports = adocaoController;