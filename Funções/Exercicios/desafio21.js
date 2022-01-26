/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */


function valorPlanoDeSaude(idade){

   if (idade < 10){
       valor = 100 + 80
       console.log(`Pague R\$${valor}`)
   }

    else if (idade < 30){
        valor = 100 + 50
        console.log(`Pague R\$${valor}`)
    }

    else if (idade < 60){
        valor = 100 + 95
        console.log(`Pague R\$${valor}`)
    }


    else if (idade > 60){
        valor = 100 + 130
        console.log(`Pague R\$${valor}`)
    }

}

valorPlanoDeSaude(5)
valorPlanoDeSaude(20)
valorPlanoDeSaude(50)
valorPlanoDeSaude(70)


