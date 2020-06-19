let total = 0
let quantidade = 0

const calculaTotais = (carrinho) => {
    for (item of carrinho) {
        quantidade = document.getElementById(item.id).value
        let valor = parseFloat(item.produto.preco)
        let totalProduto = valor * quantidade
        document.getElementById(`valor${item.id}`).innerText = `R$ ${totalProduto}`

        total += totalProduto
    }
    console.log(total)
}

const mudaQtd = evt => {
    console.log(evt)
    console.log(quantidade)
    calculaTotais(carrinho)
}

for (item of carrinho){
    let input = document.getElementById(item.id)
    input.addEventListener('change', mudaQtd)
}



calculaTotais(carrinho)

