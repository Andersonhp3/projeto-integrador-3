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
    CategoriaPet
} = require("../models");


const lojaController = {
    home: async (req, res) => {
        let usuario = req.session.usuario;
        const itens = await Produto.findAll({
            include: [{
                model: ImagemProduto,
                as: "imagem",
                atributes: ["imagem"]
            }]
        });

        let destaques = await Produto.findAll({
            include: [{
                model: ImagemProduto,
                as: "imagem",
                atributes: ["imagem"]
            }]
        });;

        let categoriaPet = await CategoriaPet.findAll({
            include: [{
                model: Produto,
                as: "categoria_pet_produto",
                atributes: ["categoria_pet_produto"]
            }]
        });

        destaques = destaques.sort((a, b) => {
            if (a.estoque > b.estoque) return -1;
            if (a.estoque < b.estoque) return 1;
            return 0;
        })

        res.render("homeLoja", {
            title: 'Loja',
            css: 'homeLoja',
            itens,
            destaques,
            usuario,
            categoriaPet
        })
    },
    showProduto: async (req, res) => {

        let id = req.query.id

        let produto = await Produto.findByPk(id, {
            include: ['usuario', 'imagem']
        })

        res.render('produto', {
            title: 'Detalhes do Produto',
            css: 'produto',
            produto
        })
    },
    showCategoria: async (req, res) => {


        let id = req.query.id;

        let categoriaPetAll = await CategoriaPet.findAll({
            include: [{
                model: Produto,
                as: "categoria_pet_produto",
                atributes: ["categoria_pet_produto"]
            }]
        });
        

        let categoriaPet = await CategoriaPet.findByPk(id, {
            include: [{
                model: Produto,
                as: "categoria_pet_produto",
                include: ['categoria', "imagem"],
            }, ]
        });

        let categoriasProduto = []
        for (let i = 0; i < categoriaPet.categoria_pet_produto.length; i++) {
            categoriasProduto[i] = categoriaPet.categoria_pet_produto[i].categoria.categoria;
        }

        categoriasProduto = categoriasProduto.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        })
        
        console.log(categoriaPet.categoria_pet_produto[0].imagem);
        var novaCategoriasProduto = categoriasProduto.filter((dado, i) => categoriasProduto.indexOf(dado) === i);


        
        res.render('categoriaLoja', {
            title: 'Busca Categoria',
            css: 'categoria',
            novaCategoriasProduto,
            categoriaPet,
            categoriaPetAll,
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

        categoria = await Categoria.findOne({
            where: {
                categoria
            }
        })

        let categoria_id = categoria.id;
        let estoque = quantidade;
        let nome = nomeProduto;

        let novoProduto = {
            id: null,
            nome,
            preco,
            descricao,
            estoque,
            categoria_id,
            usuario_id
        }

        let produto_id = await Produto.create(novoProduto)
            .then()
            .catch((err) => console.log(err));
        produto_id = produto_id.dataValues.id

        await ImagemProduto.create({
                id: null,
                imagem,
                produto_id
            })
            .then()
            .catch((err) => console.log(err));

        res.redirect('/usuario/vender');
    }
}

module.exports = lojaController;