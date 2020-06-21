let total = 0
let quantidade = 0

const calculaTotais = (carrinho) => {
    let totais = []
    for (item of carrinho) {
        quantidade = document.getElementById(item.id).value
        let valor = parseFloat(item.produto.preco)
        let totalProduto = valor * quantidade
        document.getElementById(`valor${item.id}`).innerText = `R$ ${totalProduto}`
        totais.push(totalProduto)
    }
    total = totais.reduce((total, elemento)=> total+elemento)
    document.getElementById('total').innerText = `R$${total}`
}

const mudaQtd = evt => {
    let qtd = document.querySelector('.qtd').value 
    let id = document.querySelector('.qtd').id
    $.ajax({
        url: '/mudaQtd',
        method: 'GET',
        data: {
            qtd,
            id
        },
        success: function(res){
            console.log('success')
        },
        error: function(xhr, status, error){
            alert(xhr.responseText);
        }
    })
    calculaTotais(carrinho)
}

const onFormsubmit = (e) => {
    e.preventDefault();
    let id = document.querySelector('.item').value;
    console.log(id)
    $.ajax({
        url:'/deletaritemcarrinho',
        method:'POST',
        data: {id: id},
        success: function(res){
            alert('Produto Excluido do Carrinho');
            location.reload()

        },
        error: function(xhr, status, error){
            alert(xhr.responseText);
        }
    });

    return false
}

for (item of carrinho){
    let input = document.getElementById(item.id)
    input.addEventListener('change', mudaQtd)
    let excluirItem = document.querySelector(".deleteItem")
    excluirItem.addEventListener('submit', onFormsubmit)
}

let nomeProduto = document.querySelectorAll('h6.nome')

console.log(nomeProduto)

calculaTotais(carrinho)






