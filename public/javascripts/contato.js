

let nome = document.getElementById("nome");
let email = document.getElementById("email");
let mensagem = document.getElementById("mensagem");

let alert = document.querySelector('.alert');
let enviadoSucesso = document.querySelector('#enviadoSucesso');

let btnEnviar = document.querySelector("#btnEnviar");

let urlParams = new URLSearchParams(window.location.search);

if(urlParams.has('sucesso')){
    enviadoSucesso.style.display = 'block';
}

btnEnviar.addEventListener("click" , function(evento) {

    if(nome.value == '' || email.value == '' || mensagem == ''){
        alert.style.display = 'block';
        evento.preventDefault();
    }

})