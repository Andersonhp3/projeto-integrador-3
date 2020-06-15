const path = require('path')
const fs = require('fs')
const Sequelize = require('sequelize')

const {
    Usuario,
    Endereco,
    Estado,
    Cidade,
    Pedido,
    Produto,
    Categoria,
    ImagemProduto,
    Pet
} = require("../models");

const Op = Sequelize.Op



const homeController =  {
    home: async (req, res) =>  {

        let usuario = req.session.usuario


        //Buscando todos itens
        let itens = await Produto.findAll({
            include: [{
                model: ImagemProduto,
                as: "imagem",
                atributes: ["imagem"]
            }]
        });

        let pets = await Pet.findAll({
            where: {
                adotado: 0
            },
            include: ['imagem']
        });

        let maisVendidos = itens.sort((a,b) => {
            if(a.numero_vendas > b.numero_vendas) return -1;
            if(a.numero_vendas < b.numero_vendas) return 1;
            return 0;
        })


        res.render(
            'home', {
                title: 'Home',
                css: 'index',
                usuario,
                maisVendidos,
                pets
            }
        );
    },
    pesquisa: async (req, res) => {
        let usuario = req.query.user

        let pesquisa = req.query.search

        let resultadoPesquisa = await Produto.findAll({where:{nome: {[Op.like]:`%${pesquisa}%`}}, include: ['imagem']})
        
        console.log(resultadoPesquisa)
        res.render('pesquisa',{
            title:'Resultado da Pesquisa',
            css:'categoria',
            usuario,
            pesquisa,
            resultadoPesquisa
            
        })
    }

}

module.exports = homeController