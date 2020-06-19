let total = 0
let quantidade = 0

const calculaTotais = (carrinho) => {
    for (item of carrinho) {
        quantidade = document.getElementById(item.id).value
        let valor = parseFloat(item.produto.preco)
        let totalProduto = valor * quantidade

        total += totalProduto
    }
    console.log(total)
}

let mudaQtd = evt => {
    console.log(evt)
    console.log(quantidade)
    calculaTotais(carrinho)
}

let input = document.querySelector('input[type="number"]')

input.addEventListener('change', mudaQtd)



calculaTotais(carrinho)

