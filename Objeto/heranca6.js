function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula01 = new Aula('Bem vindo', 123)
const aula02 = new Aula('Até breve', 546)
console.log(aula01, aula02)

// simulando o new
function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 567)
console.log(aula3, aula4)   