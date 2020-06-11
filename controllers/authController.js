const path = require("path");
const fs = require("fs");
const bcrypt = require("bcrypt");

const {
  Usuario,
  Endereco,
  Estado,
  Cidade,
  Pedido,
  Produto,
  Categoria,
  CategoriaPet
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
      res.redirect("/login");
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

    res.render("login", {
      title: "Tela de Login",
      css: "login",
      error: false,
    });
  },

  showLogin: (req, res) => {

    let erro = req.query.error

    res.render("login", {
      title: "Tela de Login",
      css: "login",
      nav: "",
      error: false,
      erro,
      mensagem: "Email incorreto ou senha incorreta. Tente Novamente."
    });
  },

  showCadastro: (req, res) => {
    res.render("cadastro", {
      title: "Tela de Cadastro",
      css: "cadastro",
      nav: undefined,
      error: false,
    });
  },

  showPerfil: async (req, res) => {
    let usuario = req.session.usuario;

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

    res.render("perfil", {
      title: "Minha Conta",
      css: "perfil",
      nav: "",
      error: false,
      usuario,
      endereco,
      estados,
      cidades,
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

    res.render("perfilCompras", {
      title: "Minha Compras",
      css: "perfilCompras",
      nav: "",
      error: false,
      usuario,
      pedidos,
      produtos,
    });
  },

  showVendas: async (req, res) => {
    let usuario = req.session.usuario;

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

    res.render("perfilVendas", {
      title: "Minha Vendas",
      css: "perfilVendas",
      error: false,
      usuario,
      produtos,
      pedidos
    });
  },

  showProdutos: async (req, res) => {
    let usuario = req.session.usuario;

    let usuario_id = usuario.id

    let produtos = await Produto.findAll({
      where: {
        usuario_id
      }
    })

    res.render("perfilProdutos", {
      title: "Meus Produtos",
      css: "perfilVendas",
      nav: "",
      error: false,
      usuario,
      produtos
    })
  },

  showVender: async (req, res) => {
    let usuario = req.session.usuario;

    let categorias = await Categoria.findAll()

    res.render("cadastroProduto", {
      title: "Nova Venda",
      css: "cadastroProduto",
      nav: "",
      error: false,
      usuario,
      categorias
    });
  },

  showDoar: async (req, res) => {
    let usuario = req.session.usuario;

    let categorias = await CategoriaPet.findAll()

    res.render("cadastroAdocao", {
      title: "Nova Adoção",
      css: "cadastroAdocao",
      nav: "",
      error: false,
      usuario,
      categorias
    });
  },

  sair: (req, res) => {
    req.session.usuario = undefined;

    res.redirect("/home");
  },
};

module.exports = authController;