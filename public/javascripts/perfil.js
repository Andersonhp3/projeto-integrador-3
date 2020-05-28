let selectEstado = document.getElementById('estado')

let mostrarCidades = (estado) => {
    let select = document.getElementById('cidade')
    for (c of cidades){
        if(c.estado_id === estado){
            let option = document.createElement('option');
            option.setAttribute('value', c.id);
            option.setAttribute('id', c.id);
            option.innerText = c.cidade;
            select.appendChild(option);
        }
    }
}

const onChangeOption = (evt) =>{
    console.log(evt)
    mostrarCidades(event.target.value)
}

selectEstado.addEventListener('change', onChangeOption);