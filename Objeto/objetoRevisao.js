const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    nome: 'Raul',
    idade: 56, 
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereço: {
            longradouro: 'Rua ABC',
            numero: 555
        }
    }, 
    condutores: [{
        nome: 'Junior',
        idade: 19

    }, { 
        nome: 'Ana',
        idade: 44
    }],

    calcularValorSeguro: function(){
            ///..

    }
}

carro.proprietario.endereço.numero = 1000
carro['proprietario']['endereço']['longradouro'] = '25 de março'
console.log(carro)

delete carro.condutores
delete carro.proprietario.endereço
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length)