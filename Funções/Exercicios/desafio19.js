/* O cardápio de uma lanchonete é o seguinte:
========================================
Código | Descrição do Produto  | Preço |
========================================
100    | Cachorro Quente       | R$ 3,00
200    | Hambúrguer Simples    | R$ 4,00
300    | Cheeseburguer         | R$ 5,50
400    | Bauru                 | R$ 7,50
500    | Refrigerante          | R$ 3,50
600    | Suco                  | R$ 2,80
========================================
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */


function comanda(codigo, quantidade){

    preços = [3.00, 4.00, 5.50, 7.50, 3.50, 2.80]

    switch(codigo){
        case 100:
             tot = quantidade * preços[0]
             console.log(`${tot.toFixed(2)}`)
             break
        case 200: 
            tot = quantidade * preços[1]
            console.log(`R\$${tot.toFixed(2)}`)
            break
        case 300: 
            tot = quantidade * preços[2]
            console.log(`R\$${tot.toFixed(2)}`)
            break
        case 400: 
            tot = quantidade * preços[3]
            console.log(`R\$${tot.toFixed(2)}`)
            break
        case 500: 
            tot = quantidade * preços[4]
            console.log(`R\$${tot.toFixed(2)}`)
            break
        case 600: 
            tot = quantidade * preços[5]
            console.log(`R\$${tot.toFixed(2)}`)
            break
        default:
            console.log('Produto não encontrolado!')
    }

}


comanda(200, 2)
