/* Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */


function potencia (base, expoente){
    //return Math.pow(base, expoente)

    const result = base ** expoente
    return result
}

console.log(potencia(10, 2))