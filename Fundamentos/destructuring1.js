

const pessoa = {
    nome: 'Fulana',
    idade: 20,
    endereço: {
        rua: 'la na pqp',
        numero: 666
    }
}

const { nome, idade } = pessoa 
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bomHumor = true } = pessoa
console.log(sobrenome, bomHumor)

const { endereço: { rua, numero, cep } } = pessoa
console.log(rua, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)