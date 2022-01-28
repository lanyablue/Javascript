//cadeia de prototipo

Object.prototype.atrib0 = '0'    //não recomendado

const avo = { atrib1: 'A' }
const pai = { __proto__: avo, atrib2: 'B' }
const filho = { __proto__: pai, atrib3: 'C', atrib3: '3' }

console.log(filho.atrib0, filho.atrib1, filho.atrib2, filho.atrib3)

const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },

    status(){
        return  `${this.velAtual}Km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'sdsd',
    velMax: 345        //shadowing
}


const volvo = {
    modelo: 'saldasd',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())