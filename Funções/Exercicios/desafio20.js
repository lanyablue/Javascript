/* ) Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1. */ 


function sacar(valor){

    // Sacando 100
    const rest100 = valor % 100
    const notaDeCem = (valor - rest100) / 100 // quantidade de cedulas de 100


    // Sacando 50
    valor = rest100
    const rest50 = valor % 50
    const notadeCinquenta = (valor - rest50) / 50  // quantidade de cedulas de 50


    // Sacar 10
    valor = rest50
    const rest10 = valor % 10
    const notaDeDez = (valor - rest10) / 10    // quantidade de cedulas de 10

    
    // Sacar 5
    valor = rest10
    const rest5 = valor % 5
    const notaDeCinco = (valor - rest5) / 5   // quantidade de cedulas de 5


    // Sacar 1
    valor = rest5
    const rest1 = valor % 1
    const notaDeUm = (valor - rest1) / 1  // quantidade de cedulas de 100 1
    
    valor = rest1


    if (notaDeCem != 0){
        console.log(`${notaDeCem} cedulas de 100 reais sacadas!`)
    }  

    if (notadeCinquenta != 0){
        console.log(`${notadeCinquenta} cedulas de 50 reais sacadas!`)
    }

    if (notaDeDez != 0){
        console.log(`${notaDeDez} cedulas de 10 reais sacadas!`)
    }

    if (notaDeCinco != 0){
        console.log(`${notaDeCinco} cedulas de 5 reais sacadas!`)
    }

    if (notaDeUm != 0){
        console.log(`${notaDeUm} cedulas de 1 real sacadas!`)
    }

}

sacar(166)

