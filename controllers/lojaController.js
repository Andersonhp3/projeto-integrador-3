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
        });

        let categoriaProduto = await Categoria.findAll({
            include: [{
                model: Produto,
                as: "produto",
                atributes: ["produto"]
            }]
        });

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
            carrinho
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

        if (preco == undefined) {
            preco = 100000;
        }



        let verificarQuery = (...query) => {

        }

        let queryAtual = req.url
        if (queryAtual.indexOf('preco')) {
            queryAtual = '/categoriaProduto?id=' + id
        }

        if (queryAtual.indexOf('preco') < -1 && queryAtual.indexOf('categoriaProdutoId')) {
            queryAtual = '/categoriaPet?id=' + id + "&categoriaProdutoId=" + idCategoriaProduto;
        }



        let categoriaPetAll = await CategoriaPet.findAll({
            include: [{
                model: Produto,
                as: "categoria_pet_produto",
                atributes: ["categoria_pet_produto"]
            }]
        });

        let produtoAllOrder;

        // verificando order para pesquisar
        if (ordemPreco == undefined) {
            produtoAllOrder = {
                include: 'imagem',
                where: {
                    categoria_id: id,
                    preco: {
                        [Op.between]: [0, preco]
                    }
                },
            }
        } else {
            produtoAllOrder = {
                include: 'imagem',
                where: {
                    categoria_id: id,
                    preco: {
                        [Op.between]: [0, preco]
                    }
                },
                order: [
                    ['preco', ordemPreco]
                ]
            }
        }


        let produtoAll = await Produto.findAll(
            produtoAllOrder
        )

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

        console.log(marcasOrdenadas)

        let categoriaProduto = await Categoria.findByPk(id, {
            include: [{
                model: Produto,
                where: {
                    preco: {
                        [Op.between]: [0, preco]
                    }
                },
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
            // produto,
            categoriaPetAll,
            usuario,
            categoriaProduto,
            queryAtual,
            produtoAll,
            carrinho,
            queryAtual,
            marcasOrdenadas

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




        if (queryAtual.indexOf('preco') > -1) {
            queryAtual = '/categoriaPet?id=' + id
        }

        if (queryAtual.indexOf('preco') || queryAtual.indexOf('categoriaProdutoId')) {
            queryAtual = '/categoriaPet?id=' + id + "&categoriaProdutoId=" + idCategoriaProduto;
        }

        if (queryAtual.indexOf('preco') > -1 && queryAtual.indexOf('categoriaProdutoId') > -1 && queryAtual.indexOf('preco')) {
            queryAtual = '/categoriaPet?id=' + id + "&categoriaProdutoId=" + idCategoriaProduto;
        }

        if (ordemPreco == undefined) {

        }

        if (preco == undefined) {
            preco = 100000;
        }

        let produtoAllOrder;

        // verificando order para pesquisar
        if (ordemPreco == undefined) {
            produtoAllOrder = {
                include: 'imagem',
                where: {
                    categoria_pet_id: id,
                    preco: {
                        [Op.between]: [0, preco]
                    }
                },
            }
        } else {
            produtoAllOrder = {
                include: 'imagem',
                where: {
                    categoria_pet_id: id,
                    preco: {
                        [Op.between]: [0, preco]
                    }
                },
                order: [
                    ['preco', ordemPreco]
                ]
            }
        }


        let produtoAll = await Produto.findAll(
            produtoAllOrder
        )

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
                where: {
                    preco: {
                        [Op.between]: [0, preco]
                    }
                },
                as: "categoria_pet_produto",
                include: ['categoria', "imagem"],
            }, ],

        });

        let categoriaProduto = await Categoria.findAll({
            include: [{
                model: Produto,
                where: {
                    preco: {
                        [Op.between]: [0, preco]
                    }
                },
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
            produtoAll

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

        categoria = await Categoria.findOne({
            where: {
                categoria
            }
        });

        categoria_pet = await CategoriaPet.findOne({
            where: {
                categoria: categoria_pet
            }
        });

        let categoria_id = categoria.id;
        let categoria_pet_id = categoria_pet.id;

        let novoProduto = {
            id: null,
            nome,
            marca,
            preco,
            descricao,
            estoque,
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


        res.render('carrinho', {
            title: 'Carrinho',
            css: 'carrinho',
            carrinho,
            usuario
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
            switch (item.quantidade) {
                case 2:
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    })
                    break;
                case 3:
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    })
                    break;
                case 4:
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    })
                    break;
                case 5:
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    })
                    break;
                case 6:
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    });
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    })
                    break;
                default:
                    pedidos.push({
                        produto: item.produto_id,
                        usuario: item.usuario_id,
                    })
            }
        }

        for (pedido of pedidos){
            let novoPedido = await Pedido.create({
                data: new Date(),
                usuario_id: pedido.usuario
            })

            await pedidoProduto.create({
                pedido_id: novoPedido.id,
                produto_id: pedido.produto
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

        res.render('pedidoSucesso', {
            title: "Pedido efetuado com Sucesso!",
            css: "index",
            pets
        })
    },
    atualizarProduto: async (req, res) => {
        let usuario = req.session.usuario;

        let {
            id,
            nome,
            marca,
            descricao,
            categoria,
            categoria_pet
        } = req.body;

        categoria = await Categoria.findOne({
            where: {
                categoria
            }
        });

        categoria_pet = await CategoriaPet.findOne({
            where: {
                categoria: categoria_pet
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
    }
}

module.exports = lojaController;