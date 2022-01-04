const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preço = 4998.00
prod1['desconto legal']  = 0.40 //evitar espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa',
    preço: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}


'{ "nome": "Camisa", "preço": 79.90, }' //json
 
console.log(prod2)