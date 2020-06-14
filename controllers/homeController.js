const path = require('path')
const fs = require('fs')

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
    }

}

module.exports = homeController