const path = require('path')
const fs = require('fs')

const {
    usuario,
    Pet,
    ImagemPet,
    CategoriaPet,
    Carrinho
} = require('../models')


const adocaoController = {
    pesquisa: async (req, res) => {
        let usuario = req.session.usuario;
        let categoria = req.query
        let carrinho = undefined
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

        if(usuario){
            carrinho = await Carrinho.findAll({
                where:{
                    usuario_id:usuario.id, 
                    ativo: 1
                }})
            }

        res.render("homeAdocao", {
            title: 'Adoção',
            css: 'homeAdocao',
            pets,
            categorias,
            usuario,
            carrinho
        });
    },
    home: async (req, res) => {
        let usuario = req.session.usuario;
        let carrinho = undefined
        let categorias = await CategoriaPet.findAll()
        let pets = await Pet.findAll({
            where: {
                adotado: 0
            },
            include: ['imagem']
        });
        if(usuario){
            carrinho = await Carrinho.findAll({
                where:{
                    usuario_id:usuario.id, 
                    ativo: 1
                }})
            }

        res.render("homeAdocao", {
            title: 'Adoção',
            css: 'homeAdocao',
            pets,
            usuario,
            categorias,
            carrinho
        });
    },
    detalheAdocao: async (req, res) => {
        let usuario = req.session.usuario;
        let carrinho = undefined
        let id = req.query.id

        let pet = await Pet.findByPk(id, {
            include: ['usuario', 'imagem']
        })
        if(usuario){
            carrinho = await Carrinho.findAll({
                where:{
                    usuario_id:usuario.id, 
                    ativo: 1
                }})
            }
        res.render('detalheAdocao', {
            title: 'Detalhes do pet',
            css: 'detalheAdocao',
            nav: '',
            pet,
            usuario,
            carrinho
        })
    },
    novaAdocao: async (req, res) => {
        let usuario = req.session.usuario;

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
        let usuario = req.session.usuario;
        let id = req.query.id;
        let pet = await Pet.findByPk(id, {
            include: ['usuario', 'imagem']
        })
        res.send(pet)
    },
    atualizar: async (req, res) => {
        let usuario = req.session.usuario;
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