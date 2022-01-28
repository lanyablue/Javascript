const pai = { nome: 'Pedro', corCabelo: 'Preto' }

const filha1 = Object.create(pai)
filha1.nome = 'Mari'
filha1.corCabelo = 'Azul'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Canaban', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Edel'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}