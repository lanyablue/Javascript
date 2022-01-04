function getPreço(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preço * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Vibrador',
    preço: 1500,
    desc: 0.15, 
    getPreço
}


global.preço = 20
global.desc = 0.1 
console.log(getPreço())
console.log(produto.getPreço())


const carro = { preço: 49999, desc: 0.20}

console.log(getPreço.call(carro))
console.log(getPreço.apply(carro))

console.log(getPreço.call(carro, 0.17, '$'))

console.log(getPreço.apply(global, [0.17, '$']))