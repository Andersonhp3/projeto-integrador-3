const path = require('path')
const fs = require('fs')
var Sequelize = require('sequelize');
const Op = Sequelize.Op;

const {
    Usuario,
    Endereco,
    Estado,
    Cidade,
    Pedido,
    Produto,
    Categoria,
    ImagemProduto,
    CategoriaPet,
    Carrinho,
    pedidoProduto,
    Pet
} = require("../models");




const lojaController = {
    home: async (req, res) => {
        let usuario = req.session.usuario;
        let carrinho = undefined
        const itens = await Produto.findAll({
            where: {
                ativo: {
                    [Op.ne]: false
                }
            },
            include: [{
                model: ImagemProduto,
                as: "imagem",
                atributes: ["imagem"]
            }]
        });

        let destaques = await Produto.findAll({
            where: {
                ativo: {
                    [Op.ne]: false
                }
            },
            include: [{
                model: ImagemProduto,
                as: "imagem",
                atributes: ["imagem"]
            }]
        });

        let categoriaProduto = await Categoria.findAll({
            include: [{
                model: Produto,
                as: "produto",
                atributes: ["produto"]
            }]
        });

        let categoriaPet = await CategoriaPet.findAll({
            where: {
                id: {
                  [Op.ne]: 8
                }
            },
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
        if (usuario) {
            carrinho = await Carrinho.findAll({
                where: {
                    usuario_id: usuario.id,
                    ativo: 1
                }
            })
        }
        res.render("homeLoja", {
            title: 'Loja',
            css: 'homeLoja',
            itens,
            destaques,
            usuario,
            categoriaPet,
            categoriaProduto,
            carrinho
        })
    },


    showProduto: async (req, res) => {
        let usuario = req.session.usuario;
        let id = req.query.id
        let carrinho = undefined


        let categoriaPetAll = await CategoriaPet.findAll({
            include: [{
                model: Produto,
                as: "categoria_pet_produto",
                atributes: ["categoria_pet_produto"]
            }]
        });

        let produto = await Produto.findByPk(id, {
            include: ['usuario', 'imagem']
        })
        if (usuario) {
            carrinho = await Carrinho.findAll({
                where: {
                    usuario_id: usuario.id,
                    ativo: 1
                }
            })
        }

        res.render('produto', {
            title: 'Detalhes do Produto',
            css: 'produto',
            produto,
            usuario,
            carrinho,
            categoriaPetAll
        })
    },
    detalheProduto: async (req, res) => {
        let id = req.query.id;
        let produto = await Produto.findByPk(id)
        res.send(produto)
    },

    showCategoriaProduto: async (req, res) => {
        let usuario = req.session.usuario;
        let id = req.query.id;
        let carrinho = undefined

        let preco = req.query.preco;
        let ordemPreco = req.query.ordem;
        let marca = req.query.marca;

        if(preco == undefined) {
            preco = 100000
        }

        let condPreco = {
            preco: {
                [Op.between]: [0, preco]
            }        
        }

        let condOrdemPreco;
        if(ordemPreco != undefined){
            console.log("passou")
            condOrdemPreco = [['preco', ordemPreco]]
        }else {
            condOrdemPreco = []
        }
        
        let condMarca;
        
        if(marca != undefined){
            condMarca = {
                marca: marca
            }
        }else {
            condMarca = {}
        }

        let condOrdem = [...condOrdemPreco]
        console.log(condOrdem)
        let condIdProdu = {
            categoria_id: id
        }

        let { page = 1 } = req.query;

        let condTotal = {
            ativo: {
                [Op.ne]: false // adicionado condição ativo para não trazer itens dasativados na pesquisa
            },
            ...condIdProdu,
            ...condPreco,
            ...condMarca,
        }

        let queryAtual = req.url

        if (queryAtual.indexOf('preco') > -1) {
            queryAtual = queryAtual.replace("&preco="+preco,"")
        }


        if(queryAtual.indexOf('ordem') > -1){
            queryAtual = queryAtual.replace("&ordem="+ordemPreco,"")
        }
        
        if(queryAtual.indexOf('page') > -1){
            queryAtual = queryAtual.replace("&page="+page,"")
        }



        let categoriaPetAll = await CategoriaPet.findAll({
            include: [{
                model: Produto,
                as: "categoria_pet_produto",
                atributes: ["categoria_pet_produto"]
            }]
        });

        let produtoAllOrder;



        let { count: total, rows:produtoAll } = await Produto.findAndCountAll(
            {
                include: 'imagem',
                where: condTotal,
                limit:16,
                offset: (page-1) * 16,
                order:condOrdem
            }
        )
        let totalPagina = Math.ceil(total/16);
       

        let marcasProduto = []
        for (let i = 0; i < produtoAll.length; i++) {
            marcasProduto.push({
                marca: produtoAll[i].marca
            })
        }

        marcasProduto = marcasProduto.sort((a, b) => {
            if (a.marca < b.marca) return -1;
            if (a.marca > b.marca) return 1;
            return 0;
        });

        var marcasOrdenadas = marcasProduto.filter(function (a) {
            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null));


        let categoriaProduto = await Categoria.findByPk(id, {
            include: [{
                model: Produto,
                as: "produto",
                include: ['categoriaPet', 'imagem'],
            }, ],
        });



        if (usuario) {
            carrinho = await Carrinho.findAll({
                where: {
                    usuario_id: usuario.id,
                    ativo: 1
                }
            })
        }

        res.render('categoriaProduto', {
            title: 'Categoria Produto',
            css: 'categoria',
            categoriaPetAll,
            usuario,
            categoriaProduto,
            queryAtual,
            produtoAll,
            carrinho,
            queryAtual,
            marcasOrdenadas,
            totalPagina

        });
    },


    showCategoriaPet: async (req, res) => {


        let id = req.query.id;
        let idCategoriaProduto = req.query.categoriaProdutoId;
        let preco = req.query.preco;
        let ordemPreco = req.query.ordem;
        let queryAtual = req.url;
        let usuario = req.session.usuario;
        let carrinho = undefined;

        if(preco == undefined) {
            preco = 100000
        }

        let condPreco = {
            preco: {
                [Op.between]: [0, preco]
            }        
        }

        let condOrdemPreco;

        if(ordemPreco != undefined){
            condOrdemPreco = [['preco', ordemPreco]]
        }else {
            condOrdemPreco = []
        }

        let condOrdem = [...condOrdemPreco]


        let condIdCateProduto;

        if(idCategoriaProduto != undefined){
            condIdCateProduto = {
                categoria_id: idCategoriaProduto
            }
        }else {
            condIdCateProduto = {}
        }

        let condIdCatePet = {
            categoria_pet_id: id
        }

        
        let condTotal = {
            ativo: {
                [Op.ne]: false // adicionado condição ativo para não trazer itens dasativados na pesquisa
            },
            ...condPreco,
            ...condIdCateProduto,
            ...condIdCatePet
        }
        let { page = 1 } = req.query;
        
        if (queryAtual.indexOf('preco') > -1) {
            queryAtual = queryAtual.replace("&preco="+preco,"")
        }

        if(queryAtual.indexOf('ordem') > -1){
            queryAtual = queryAtual.replace("&ordem="+ordemPreco,"")
        }
        
        if(queryAtual.indexOf('page') > -1){
            queryAtual = queryAtual.replace("&page="+page,"")
        }


        if (preco == undefined) {
            preco = 100000;
        }

        let { count: total, rows:produtoAll } = await Produto.findAndCountAll(
            {
                include: 'imagem',
                where: condTotal,
                limit:16,
                offset: (page-1) * 16,
                order: condOrdem
            }
        )
        let totalPagina = Math.ceil(total/16);

        //Todas as categorias de pet
        let categoriaPetAll = await CategoriaPet.findAll({
            include: [{
                model: Produto,
                as: "categoria_pet_produto",
                atributes: ["categoria_pet_produto"]
            }]
        });

        // Categoria correspondente com o id do pet
        let categoriaPet = await CategoriaPet.findByPk(id, {
            include: [{
                model: Produto,
                as: "categoria_pet_produto",
                include: ['categoria', "imagem"],
            }, ],

        });

        let categoriaProduto = await Categoria.findAll({
            include: [{
                model: Produto,
                as: "produto",
                atributes: ["produto"]
            }],

        });
        // categoriasProduto para armazenar as categorias de acordo com o id categoriaPet
        let categoriasProduto = []
        for (let i = 0; i < categoriaPet.categoria_pet_produto.length; i++) {
            categoriasProduto.push({
                id: categoriaPet.categoria_pet_produto[i].categoria.id,
                categoria: categoriaPet.categoria_pet_produto[i].categoria.categoria
            })

        }

        //Ordenação do array alfabeta de ordem crescente
        categoriasProduto = categoriasProduto.sort((a, b) => {
            if (a.categoria < b.categoria) return -1;
            if (a.categoria > b.categoria) return 1;
            return 0;
        })


        var novaCategoriasProduto = categoriasProduto.filter(function (a) {
            return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
        }, Object.create(null))

        if (usuario) {
            carrinho = await Carrinho.findAll({
                where: {
                    usuario_id: usuario.id,
                    ativo: 1
                }
            })
        }

        


        res.render('categoriaPet', {
            title: 'Busca Categoria',
            css: 'categoria',
            novaCategoriasProduto,
            categoriaPet,
            categoriaPetAll,
            idCategoriaProduto,
            categoriaProduto,
            queryAtual,
            carrinho,
            usuario,
            produtoAll,
            totalPagina

        })
    },
    novoProduto: async (req, res) => {
        let usuario = req.session.usuario;
        let usuario_id = usuario.id;

        let {
            nome,
            marca,
            descricao,
            estoque,
            preco,
            categoria,
            categoria_pet,
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

        let categoria_id = categoria;
        let categoria_pet_id = categoria_pet;

        let novoProduto = {
            id: null,
            nome,
            marca,
            preco,
            descricao,
            estoque,
            ativo: true,
            categoria_id,
            categoria_pet_id,
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
    },
    comprar: async (req, res) => {

        let {
            id,
            quant
        } = req.query

        let usuario = req.session.usuario


        if (!usuario) {
            res.redirect(`/login?error=login-required&id=${id}&quant=${quant}`)
        }

        let usuario_id = usuario.id

        await Carrinho.create({
            usuario_id,
            produto_id: id,
            quantidade: quant,
            ativo: true
        })

        res.redirect('/carrinho')
    },
    carrinho: async (req, res) => {

        let usuario = req.session.usuario
        let usuario_id = usuario.id
        let carrinho = await Carrinho.findAll({
            where: {
                usuario_id,
                ativo: 1
            },
            include: ['produto']
        })

        let relacionados;
        if(carrinho.length > 0){
        relacionados = await Produto.findAll({
            where: {
                categoria_pet_id: carrinho[0].produto.categoria_pet_id,
                ativo: {
                    [Op.ne]: false
                }
            },
            include: ['imagem']
        })
        }

        console.log(carrinho.length)

        res.render('carrinho', {
            title: 'Carrinho',
            css: 'carrinho',
            carrinho,
            usuario,
            relacionados
        })
    },
    mudaQtd: async (req, res) => {
        let {
            qtd,
            id
        } = req.query

        await Carrinho.update({
            quantidade: qtd
        }, {
            where: {
                id
            }
        })

        res.redirect('/carrinho')

    },
    deletarItemCarrinho: async (req, res) => {
        let id = req.body;

        await Carrinho.update({
            ativo: false
        }, {
            where: {
                id: id.id
            }
        })

        res.redirect('/carrinho')
    },
    finalizar: async (req, res) => {
        let usuario = req.session.usuario

        let carrinho = await Carrinho.findAll({
            where: {
                usuario_id: usuario.id,
                ativo: 1
            }
        })

        let pedidos = []

        for (item of carrinho) {
            for (let i=0; i < item.quantidade; i++){
                pedidos.push({
                    produto: item.produto_id,
                    usuario: item.usuario_id,
                })
            }
        }

       

        for (pedido of pedidos) {
            let novoPedido = await Pedido.create({
                data: new Date(),
                usuario_id: pedido.usuario
            })

            await pedidoProduto.create({
                pedido_id: novoPedido.id,
                produto_id: pedido.produto
            })

            let produto = await Produto.findByPk(pedido.produto)

            let novoEstoque = produto.estoque - 1
            let vendas = produto.numero_vendas + 1

            await Produto.update({
                estoque: novoEstoque,
                numero_vendas: vendas
            }, {
                where: {
                    id: pedido.produto
                }
            })
        }

        await Carrinho.update({
            ativo: false
        }, {
            where: {
                usuario_id: usuario.id
            }
        })

        res.redirect('/pedidoSucesso')
    },
    sucesso: async (req, res) => {
        let usuario = req.session.usuario

        let pets = await Pet.findAll({
            where: {
                adotado: 0
            },
            order: [
                ['dataCadastro', 'DESC'],
            ],
            include: ['imagem'],
            limit: 18
        });


        let carrinho = await Carrinho.findAll({
            where: {
                usuario_id: usuario.id,
                ativo: 1
            }
        })


        res.render('pedidoSucesso', {
            title: "Pedido efetuado com Sucesso!",
            css: "index",
            pets,
            usuario,
            carrinho
        })
    },
    atualizarProduto: async (req, res) => {
        let usuario = req.session.usuario;

        let {
            id,
            nome,
            marca,
            estoque,
            preco,
            descricao,
            categoria,
            categoria_pet
        } = req.body;
        console.log(categoria)
        categoria = await Categoria.findOne({
            where: {
                id:categoria
            }
        });
        console.log(categoria)
        categoria_pet = await CategoriaPet.findOne({
            where: {
                id: categoria_pet
            }
        });

        let categoria_id = categoria.id;
        let categoria_pet_id = categoria_pet.id;

        let update = await Produto.update({
            nome,
            marca,
            descricao,
            estoque,
            preco,
            categoria_id,
            categoria_pet_id
        }, {
            where: {
                id
            }
        })


        res.redirect('/usuario/produtos')
    },
    desativar: async (req, res) => {
        let id = req.query.id;
        let update = await Produto.update({
            ativo: false,
        }, {
            where: {
                id
            }
        })
        res.send(update)
    }
}

module.exports = lojaController;