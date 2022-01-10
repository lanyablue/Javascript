//  Faça um algoritmo que calcule o fatorial de um número.


function fatorial(num){
    mult = 1

    for (i = num; i > 1; i--){
        mult *= i
    }

    return mult

}

console.log(fatorial(5))
