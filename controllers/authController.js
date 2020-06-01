const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');
const fileHelper = require('../middlewares/fileHelper')
const { Usuario, Endereco, Estado, Cidade } = require('../models');



const authController = {
    login: async (req, res) => {
        const {email, senha} = req.body;

        const user = await Usuario.findOne({ where : { email}});

        if(!user){
            res.redirect('/login')
        }

        if(!bcrypt.compareSync(senha, user.senha)){
            res.redirect('/login')
        }

        req.session.usuario = user

        res.redirect('/home')
    },

    cadastro: async (req, res) => {
        let {nome, cpf_cnpj, email, senha} = req.body;
    
        if(req.file){            
            var imagem = await fileHelper.compressImage(req.file, 100)
                .then()
                .catch(err => console.log(err));
        }

        const user = await Usuario.findOne({where: {email}});

        if(user) {
            res.redirect('/login')
        }

        let senhaHash = bcrypt.hashSync(senha, 12);

        let  novoUsuario = {
            nome,
            email,
            senha: senhaHash,
            cpf_cnpj,
            imagem
        }
                
        await Usuario.create(novoUsuario)
            .then()
            .catch(err => console.log(err));
        

        res.render('login', {
            title: 'Tela de Login',
            css: 'login',
            error: false
        });
    },

    showLogin: (req, res) => {
        res.render('login', {
            title: 'Tela de Login',
            css: 'login',
            nav: '',
            error: false
        });
    },

    showCadastro: (req, res) => {
        res.render('cadastro', {
            title: 'Tela de Cadastro',
            css: 'cadastro',
            nav: '',
            error: false
        });
    },

    showPerfil: async (req,res) => {

        let usuario = req.session.usuario

        let usuario_id = usuario.id

        console.log(`Usuario: ${usuario_id}`)

        let endereco = await Endereco.findOne({where: {usuario_id}, include: ['estado', 'cidade']})


        console.log(endereco)

        let estados = await Estado.findAll().then().catch(err => console.log(err))

        let cidades = await Cidade.findAll().then().catch(err => console.log(err))

        res.render('perfil', {
            title: 'Minha Conta',
            css:'perfil',
            nav: '',
            error:false,
            usuario,
            endereco,
            estados,
            cidades
        })
    },

    cadastroEndereco: async (req,res)=>{
        let usuario = req.session.usuario

        let usuario_id = usuario.id

        console.log(`Usuario: ${usuario_id}`)

        let {cep, logradouro, numero, bairro, estado, cidade} = req.body;

        let novoEndereco = {
                cep,
                logradouro,
                numero,
                bairro,
                usuario_id,
                estado_id: estado,
                cidade_id: cidade
        }

        await Endereco.create(novoEndereco).then().catch(err => console.log(err))

        res.redirect('/usuario/perfil')
    },
    
    showCompras: (req,res) => {

        let usuario = req.session.usuario

        res.render('perfilCompras', {
            title: 'Minha Compras',
            css:'perfilCompras',
            nav: '',
            error:false,
            usuario
        })
    },
    
    showVendas: (req,res) => {

        let usuario = req.session.usuario

        res.render('perfilVendas', {
            title: 'Minha Vendas',
            css:'perfilVendas',
            nav: '',
            error:false,
            usuario
        })
    },

    showVender: (req,res) => {

        let usuario = req.session.usuario

        res.render('cadastroProduto', {
            title: 'Nova Venda',
            css:'cadastroProduto',
            nav: '',
            error:false,
            usuario
        })
    },

    showDoar: (req,res) => {

        let usuario = req.session.usuario

        res.render('cadastroAdocao', {
            title: 'Nova Adoção',
            css:'cadastroAdocao',
            nav: '',
            error:false,
            usuario
        })
    },

    sair: (req,res)=>{
        req.session.usuario = undefined

        res.redirect('/home')
    }
    
    
};

module.exports = authController;