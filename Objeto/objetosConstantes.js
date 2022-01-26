//pessoa -> 123 -> (...)
const pessoa = { nome: 'João'}
pessoa.nome = 'Paula'
console.log(pessoa)

// pessoa -> 456 -> (...)

Object.freeze(pessoa)

pessoa.nome = "Maria"
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'João'})
console.log(pessoaConstante)

