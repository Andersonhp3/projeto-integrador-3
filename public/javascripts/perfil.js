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