let editAll = document.querySelectorAll('a.edit');
let chkAdotado = document.getElementById('adotado');
let btnAtualizar = document.getElementById('btn-atualizar');
let updateForm = document.getElementById('form-atualizar');

async function onClickEdit(e) {
    let id = (e.target.id).replace('edit_','');
    console.log(id)

    let pet = await fetch('/pet?id='+ id)
        .then(response => response.json())
        .then(data => {return data})
    
    console.log(pet)

    document.getElementById('id').value = pet.id;
    document.getElementById('nome').value = pet.nome;
    document.getElementById('descricao').value = pet.descricao;
    document.getElementById('contato').value = pet.contato;
    if(pet.adotado){
        document.getElementById('adotado').checked = true;
    } else {
        document.getElementById('adotado').checked = false;
    }
    

    $('#edit-modal').modal('show');

    
};

const onChangeAdotado = (e) => {
    console.log(e)
    if(e.target.checked) {
        document.getElementById('dataAdotado').value = new Date();
    } else {
        document.getElementById('dataAdotado').value = null;
    }
}

for(edit of editAll) {
    edit.addEventListener('click', onClickEdit);
}

chkAdotado.addEventListener('change', onChangeAdotado);