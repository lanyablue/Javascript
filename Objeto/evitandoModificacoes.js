// Object.preventExtentions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensivel', Object.isExtensible(produto))