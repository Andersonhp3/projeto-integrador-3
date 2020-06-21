const path = require('path')
const fs = require('fs')

const {
    Contato,
    Carrinho
} = require("../models");


const contatoController =  {
    showContato: async(req, res) => {
        let usuario = req.session.usuario;
        let carrinho =undefined
        if(usuario){
            carrinho = await Carrinho.findAll({
                where:{
                    usuario_id:usuario.id, 
                    ativo: 1
                }})
            }
        res.render("contato", {
            title: 'Contato',
            css: 'contato',
            usuario,
            carrinho
        })
    },
    mandarMensagem: async (req, res) => {
        let {
            nome,
            email,
            mensagem
        } = req.body;
        await Contato.create({nome, email, mensagem})
            .then()
            .catch((err) => console.log(err));

        res.redirect('/contato?sucesso=true')
    }
}

module.exports = contatoController;