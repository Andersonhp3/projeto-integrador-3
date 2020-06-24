// vars
let upload = document.querySelector('#image-selector'),
    result = document.querySelector("#canvas"),
    save = document.querySelector("#pronto"),
    cropper = "",
    btnCancelar = document.querySelector('#cancel'),
    btnConfirmar = document.querySelector('#submit'),
    preview = document.querySelector("#fotoUser");

let tmpImagem = preview.src;

btnCancelar.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('imagemb64').value = "";
    btnCancelar.parentElement.classList.add("d-none");
    btnConfirmar.parentElement.classList.add("d-none");
    preview.src = tmpImagem
});

upload.addEventListener("change", (e) => {
    if (e.target.files.length) {
        // start file reader
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target.result) {
                // create new image
                let img = document.createElement("img");
                img.id = "image";
                img.src = e.target.result;
                // clean result before
                result.innerHTML = "";
                // append new image
                result.appendChild(img);
                // init cropper
                cropper = new Cropper(img, {
                    aspectRatio: 1,
                    dragMode: 'move',
                    viewMode: 2,
                    minContainerWidth: 300,
                    minContainerHeight: 300,
                });
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    $('#image-cropper').modal('show');
});

upload.addEventListener('click', (e) => {
    upload.value = "";
})

save.addEventListener('click', (e) => {
    e.preventDefault();
    let imgSrc = cropper
    .getCroppedCanvas()
    .toDataURL();
    preview.src = imgSrc;
    document.getElementById('imagemb64').value = imgSrc;
    btnCancelar.parentElement.classList.remove("d-none");
    btnConfirmar.parentElement.classList.remove("d-none");
});


// API buscaCep
let btnEndereco = document.querySelector('#btn-endereco')
let cepInput = document.querySelector('#cep')
let ruaInput = document.querySelector('#logradouro')
let bairroInput = document.querySelector('#bairro')

const buscaCep = () => {
    if(cepInput.value.length == 9){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
        .then(res => res.json())
        .then(dados => {
            ruaInput.value = dados.logradouro;
            bairroInput.value = dados.bairro;
        })
    }
}


//Select de cidade de acordo com o estado
const selectEstado = document.getElementById('estado')

let selectCidade = document.getElementById('cidade')

const mostrarCidades = (estado) => {  
    for (c of cidades){
        if(c.estado_id == estado){
            let option = document.createElement('option');
            option.setAttribute('value', c.id);
            option.setAttribute('id', c.id);
            option.innerText = c.cidade;
            selectCidade.appendChild(option);
        }
    }
}

const onChangeOption = (evt) =>{
    selectCidade.innerHTML = '<option value="0" selected disabled>Cidade</option>'
    mostrarCidades(event.target.value)
}


if (btnEndereco){
    addEventListener('input', buscaCep)
    selectEstado.addEventListener('change', onChangeOption);
}