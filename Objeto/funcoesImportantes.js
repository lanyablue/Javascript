const pessoa = {
    nome: "Rebeca",
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNacimento', {
    enumerable: false,
    writable: false,
    value: '01/01/1999'
})

pessoa.dataNacimento = '01/01/2002'
console.log(pessoa.dataNacimento)
console.log(Object.keys(pessoa))

// Object.assign ecmascript 2015

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.cb = 1234
console.log(obj)
