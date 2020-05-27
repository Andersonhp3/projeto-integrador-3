const VerificaUsuarioLogado = (req, res, next) => {

    if(!req.session.usuario){
        res.redirect('/login');
    }

    next();
}

module.exports = VerificaUsuarioLogado