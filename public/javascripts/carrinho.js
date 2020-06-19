let total = 0

const calculaTotal = (valores) => {
    for (valor of valores){
        total = total + parseFloat(valor)
    }
    console.log(total)
}
let valores = []

for (item of carrinho){
    valores.push(item.produto.preco)
}

console.log(valores)

calculaTotal(valores)

const exibeTotais = () => {
    let totalProdutos = document.getElementById('totalProdutos')
    totalProdutos.innerText = `R$ ${total}`

    let totalGeral = document.getElementById('total')
    totalGeral.innerText = `R$ ${total}`
}

exibeTotais()



