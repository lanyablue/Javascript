function criarProduto(nome, preço){
    return {
        nome, 
        preço,
        desconto: 0.1
    }
}

console.log(criarProduto('Maracujá', 20))
console.log(criarProduto('Vibrador', 19.50))
