// Armazenando em variável 
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


// Armazenando uma função arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implicito
const subtração = (a, b) => a - b
console.log(subtração(2, 3))

const imprimir2 = a => console.log(a)
imprimir2("Legal!!")