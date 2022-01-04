const soma = function (x, y){
    return x + y
}

const imprimir = function (a, b, operação = soma) {
    console.log(operação(a, b))
}

imprimir(5, 4)
imprimir(5, 4, soma)
imprimir(5, 4, function(x, y) {
    return x - y
})
imprimir(5, 4, (x, y) => x * y)

const pessoa = {
    falar: function() {
        console.log('Olá mona')
    }
}

pessoa.falar()