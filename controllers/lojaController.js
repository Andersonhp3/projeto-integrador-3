const path = require('path')
const fs = require('fs')
const {
    Usuario,
    Endereco,
    Estado,
    Cidade,
    Pedido,
    Produto,
    Categoria
  } = require("../models");

const lojaController = {
    home: (req, res) => {
        res.render("homeLoja", {
            title: 'Loja',
            css: 'homeLoja',
            nav: 'navLoja'
        })
    },
    showProduto: (req, res) => {
        res.render('produto', {
            title: 'Detalhes do Produto',
            css: 'produto',
            nav: ''
        })
    },
    novoProduto: async (req, res) => {
        let usuario = req.session.usuario;

        let usuario_id = usuario.id

        let {
            nomeProduto,
            descricao,
            quantidade,
            preco,
            categoria,
            imagemb64
        } = req.body;

        async function decode_base64(base64str, filename) {
            let buff = Buffer.from(base64str, 'base64');
            let file = ('/images/produtos/' + Date.now().toString() + '-' + filename);
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
            var imagem = "/images/produtos/default.png";
        } else {
            let filetype = imagemb64.split(';base64,')[0].split('/')[1];
            let imgb64 = imagemb64.split(';base64,').pop();
            var imagem = await decode_base64(imgb64, ('produto.' + filetype));
        }

        categoria = await Categoria.findOne(
            {
                where: {
                    categoria
                }
            }
        )
        
        let categoria_id = categoria.id;
        let estoque = quantidade;
        let nome = nomeProduto;

        console.log(
            nome,
            preco,
            descricao,
            estoque,
            categoria_id,
            usuario_id,
            imagem
        )


    }
}

module.exports = lojaController;