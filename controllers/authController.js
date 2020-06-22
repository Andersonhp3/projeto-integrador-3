const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");

const {
  Usuario,
  Endereco,
  Estado,
  Cidade,
  Pedido,
  Produto,
  Categoria,
  CategoriaPet,
  Pet,
  Carrinho
} = require("../models");

const authController = {
  login: async (req, res) => {
    const {
      email,
      senha
    } = req.body;

    const user = await Usuario.findOne({
      where: {
        email
      }
    });

    if (!user) {
      res.redirect("/login?error=1");
    }

    if (!bcrypt.compareSync(senha, user.senha)) {
      res.redirect("/login?error=1");
    }

    req.session.usuario = user;

    res.redirect("/home");
  },

  cadastro: async (req, res) => {
    let {
      nome,
      cpf_cnpj,
      email,
      senha,
      imagemb64
    } = req.body;

    async function decode_base64(base64str, filename) {
      let buff = Buffer.from(base64str, 'base64');
      let file = ('/images/profiles/' + Date.now().toString() + '-' + filename);
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
      var imagem = "/images/profiles/default.png";
    } else {
      let filetype = imagemb64.split(';base64,')[0].split('/')[1];
      let imgb64 = imagemb64.split(';base64,').pop();
      var imagem = await decode_base64(imgb64, ('avatar.' + filetype));
    }
    
    const user = await Usuario.findOne({
      where: {
        email
      }
    });

    if (user) {
      res.redirect("/login?error=2");
    }

    let senhaHash = bcrypt.hashSync(senha, 12);

    let novoUsuario = {
      id: null,
      nome,
      email,
      senha: senhaHash,
      cpf_cnpj,
      imagem,
    };

    await Usuario.create(novoUsuario)
      .then()
      .catch((err) => console.log(err));

    // res.render("login", {
    //   title: "Tela de Login",
    //   css: "login",
    //   error: false,
    //   mensagem: "Cadastro efetuado com Sucesso!"
    // });

    res.redirect('/login?cadastro=success')
  },

  showLogin: (req, res) => {

    let erro = req.query.error

    let cadastroEfetuado = req.query.cadastro

    res.render("login", {
      title: "Tela de Login",
      css: "login",
      error: false,
      erro,
      cadastroEfetuado,
      mensagemSucesso: "Usuário cadastrado com sucesso!",
      mensagemErro1: "Email incorreto ou senha incorreta. Tente Novamente.",
      mensagemErro2: "Usuário já cadastrado, por favor efetue o Login",
      mensagemLoginRequired: "Você precisa entrar para continuar"
    });
  },

  showCadastro: (req, res) => {
    res.render("cadastro", {
      title: "Tela de Cadastro",
      css: "cadastro",
      error: false,
    });
  },

  showPerfil: async (req, res) => {
    let usuario = req.session.usuario;
    let carrinho = undefined
    let usuario_id = usuario.id;

    console.log(`Usuario: ${usuario_id}`);

    let endereco = await Endereco.findOne({
      where: {
        usuario_id
      },
      include: ["estado", "cidade"],
    });

    console.log(endereco);

    let estados = await Estado.findAll()
      .then()
      .catch((err) => console.log(err));

    let cidades = await Cidade.findAll()
      .then()
      .catch((err) => console.log(err));

      if(usuario){
        carrinho = await Carrinho.findAll({
            where:{
                usuario_id:usuario.id, 
                ativo: 1
            }})
        }

    res.render("perfil", {
      title: "Minha Conta",
      css: "perfil",
      error: false,
      usuario,
      endereco,
      estados,
      cidades,
      carrinho
    });
  },

  cadastroEndereco: async (req, res) => {
    let usuario = req.session.usuario;

    let usuario_id = usuario.id;

    console.log(`Usuario: ${usuario_id}`);

    let {
      cep,
      logradouro,
      numero,
      bairro,
      estado,
      cidade
    } = req.body;

    let novoEndereco = {
      cep,
      logradouro,
      numero,
      bairro,
      usuario_id,
      estado_id: estado,
      cidade_id: cidade,
    };

    await Endereco.create(novoEndereco)
      .then()
      .catch((err) => console.log(err));

    res.redirect("/usuario/perfil");
  },

  showCompras: async (req, res) => {
    let usuario = req.session.usuario;
    let carrinho = undefined
    let usuario_id = usuario.id;

    let pedidos = await Pedido.findAll({
      where: {
        usuario_id
      },
      include: [{
          model: Produto,
          as: "produto",
          attributes: ["nome", "preco"]
        },
        "produto",
      ],
    });
    let produtos = await Produto.findAll()
      .then()
      .catch((err) => console.log(err));
      if(usuario){
        carrinho = await Carrinho.findAll({
            where:{
                usuario_id:usuario.id, 
                ativo: 1
            }})
        }
    res.render("perfilCompras", {
      title: "Minha Compras",
      css: "perfilCompras",
      error: false,
      usuario,
      pedidos,
      produtos,
      carrinho
    });
  },

  showVendas: async (req, res) => {
    let usuario = req.session.usuario;
    let carrinho = undefined
    let usuario_id = usuario.id;

    let pedidos = await Pedido.findAll({
      where: {
        usuario_id
      },
      include: [{
          model: Produto,
          as: "produto",
          attributes: ["nome", "preco"]
        },
        "produto",
      ],
    });

    let produtos = await Produto.findAll({
      where: {
        usuario_id
      },
      include: [{
          model: Pedido,
          as: "pedido",
          attributes: ["data"]
        },
        "pedido",
      ],
    });
    if(usuario){
      carrinho = await Carrinho.findAll({
          where:{
              usuario_id:usuario.id, 
              ativo: 1
          }})
      }
    res.render("perfilVendas", {
      title: "Minha Vendas",
      css: "perfilVendas",
      error: false,
      usuario,
      produtos,
      pedidos,
      carrinho
    });
  },

  showProdutos: async (req, res) => {
    let usuario = req.session.usuario;
    let carrinho = undefined
    let usuario_id = usuario.id
    let categorias = await Categoria.findAll();
    let categorias_pet = await CategoriaPet.findAll();

    let produtos = await Produto.findAll({
      where: {
        usuario_id
      }
    })
    if(usuario){
      carrinho = await Carrinho.findAll({
          where:{
              usuario_id:usuario.id, 
              ativo: 1
          }})
      }

    res.render("perfilProdutos", {
      title: "Meus Produtos",
      css: "perfilVendas",
      error: false,
      usuario,
      produtos,
      carrinho,
      categorias,
      categorias_pet
    })
  },

  showVender: async (req, res) => {
    let usuario = req.session.usuario;
    let usuario_id = usuario.id
    let carrinho = undefined
    let categorias = await Categoria.findAll();

    let categorias_pet = await CategoriaPet.findAll();
    if(usuario){
      carrinho = await Carrinho.findAll({
          where:{
              usuario_id:usuario.id, 
              ativo: 1
          }})
      }

    res.render("cadastroProduto", {
      title: "Nova Venda",
      css: "cadastroProduto",
      error: false,
      usuario,
      categorias,
      categorias_pet,
      carrinho
    });
  },

  showDoar: async (req, res) => {
    let usuario = req.session.usuario;
    let usuario_id = usuario.id
    let carrinho = undefined
    let categorias = await CategoriaPet.findAll({
      where: {
        id: {
          [Op.ne]: 8
        }
      }
    });
    if(usuario){
      carrinho = await Carrinho.findAll({
          where:{
              usuario_id:usuario.id, 
              ativo: 1
          }})
      }

    res.render("cadastroAdocao", {
      title: "Nova Adoção",
      css: "cadastroAdocao",
      error: false,
      usuario,
      categorias,
      carrinho
    });
  },

  showDoacoes: async (req, res) => {
    let usuario = req.session.usuario;
    let usuario_id = usuario.id
    let carrinho = undefined
    let pets = await Pet.findAll({
      include: ['usuario', 'imagem'],
      where: {
        usuario_id
      }
    })
    
    if(usuario){
      carrinho = await Carrinho.findAll({
          where:{
              usuario_id:usuario.id, 
              ativo: 1
          }})
        carrinho = carrinho.filter((result)=>{
          return result.ativo = true
        })
        console.log(carrinho.ativo)
      }
    res.render("perfilDoacoes", {
      title: "Doações",
      css: "perfilDoacoes",
      error: false,
      usuario,
      pets,
      carrinho
    });
  },

  sair: (req, res) => {
    req.session.usuario = undefined;

    res.redirect("/home");
  },
};

module.exports = authController;