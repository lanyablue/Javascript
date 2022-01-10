/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumentoDeSalario(plano, salarioAtual){
    switch(plano){
        case 'A':
            result = ((salarioAtual * 10) / 100) + salarioAtual
            console.log(`R$${result.toFixed(2)}`)
            break
        case 'B':
            result = (salarioAtual * 15 / 100) + salarioAtual
            console.log(`R$${result.toFixed(2)}`)
            break
        case 'C':
            result = (salarioAtual * 20 / 110) + salarioAtual
            console.log(`R$${result.toFixed(2)}`)
            break
    }
}

aumentoDeSalario('A', 1200)
aumentoDeSalario('B', 1200)
aumentoDeSalario('C', 1200)
