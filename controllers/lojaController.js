const {Produto, ImagemProduto}= require("../models")
const path = require('path')
const fs = require('fs')


const lojaController = {
    home: async (req, res) => {
        const itens = await Produto.findAll();
        const imagem = await ImagemProduto.findAll();
        const filtro =(i)=>
        { return imagem.filter((resultado)=>{
            return resultado.produto_id == itens[i-1].id
            })[0];

        }
        res.render("homeLoja", {
            title: 'Loja',
            css: 'homeLoja',
            nav: 'navLoja',
            itens,
            filtro
        })
    },
    showProduto: (req, res) => {
        res.render('produto', {
            title: 'Detalhes do Produto',
            css: 'produto',
            nav: ''
        })
    }
}

module.exports = lojaController;