/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

function anuidade(mês, valor){

    let perMes = 5
    let valorJuros = 0

    for(i = 2; i < mês; i++){
        //valorJuros = ((valor * perMes) / 100) + valor
        perMes += 5   
        
    //return valorJuros   
    }

    valorJuros = ((valor * perMes) / 100) + valor
    return valorJuros



}

console.log(anuidade(5, 1000))