/* ) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */ 


function sacar(valor){

    // Sacando 100
    rest100 = valor % 100
    notaDeCem = (valor - rest100) / 100 // quantidade de cedulas de 100


    // Sacando 50
    valor = rest100
    rest50 = valor % 50
    notadeCinquenta = (valor - rest50) / 50  // quantidade de cedulas de 50


    // Sacar 10
    valor = rest50
    rest10 = valor % 10
    notaDeDez = (valor - rest10) / 10    // quantidade de cedulas de 10

    
    // Sacar 5
    valor = rest10
    rest5 = valor % 5
    notaDeCinco = (valor - rest5) / 5   // quantidade de cedulas de 5


    // Sacar 1
    valor = rest5
    rest1 = valor % 1
    notaDeUm = (valor - rest1) / 1  // quantidade de cedulas de 100 1
    
    valor = rest1


    if (notaDeCem != 0){
        console.log(`${notaDeCem} celulas de 100 reais sacadas!`)
    }  

    if (notadeCinquenta != 0){
        console.log(`${notadeCinquenta} celulas de 50 reais sacadas!`)
    }

    if (notaDeDez != 0){
        console.log(`${notaDeDez} celulas de 10 reais sacadas!`)
    }

    if (notaDeCinco != 0){
        console.log(`${notaDeCinco} celulas de 5 reais sacadas!`)
    }

    if (notaDeUm != 0){
        console.log(`${notaDeUm} celulas de 1 real sacadas!`)
    }

}

console.log(sacar(166))