/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */

function triangulo(ladoA, ladoB, ladoC){
    if (ladoA == ladoB && ladoC == ladoB){      //todos os lados iguais
        console.log('Equilátero')
    }
    //if ( ladoA == ladoB && ladoB != ladoC || ladoC == ladoA && ladoA != ladoB || ladoB == ladoC && ladoC != ladoA){      // dois lados iguais

    if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA){
        console.log('Isósceles')
    }
    if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA){  // todos os lados diferentes
        console.log('Escaleno')
    }
}

triangulo(3, 5, 5)