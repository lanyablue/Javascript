// par nome/valor
const saudação = 'Olá' //contexto léxico 1


function exec(){
    const saudação = "aaaaa"  //contexto léxico 2
    return saudação
}



// Objetos são grupos aninhados de pares nomes/valor
const cliente = {
    nome: 'Paula',
    idade: 32,
    peso: 55,
    endereço: {
        logradouros: 'Rua ------',
        numero: 123
    }
}

console.log(saudação)

console.log(exec())
console.log(cliente)