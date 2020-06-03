let cepInput = document.querySelector('#cep')
let ruaInput = document.querySelector('#logradouro')
let bairroInput = document.querySelector('#bairro')

const buscaCep = () => {
    if(cepInput.value.length == 8){
    fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
    .then(res => res.json())
    .then(dados => {
        ruaInput.value = dados.logradouro;
        bairroInput.value = dados.bairro;
    })
    }
}

addEventListener('input', buscaCep)



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
    console.log(evt)
    selectCidade.innerHTML = '<option value="0" selected disabled>Cidade</option>'
    mostrarCidades(event.target.value)
}

selectEstado.addEventListener('change', onChangeOption);