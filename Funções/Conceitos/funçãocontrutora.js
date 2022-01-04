function Carro(velocidadeMaximo = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo public
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaximo) {
            velocidadeAtual += delta

        } else {
            velocidadeAtual = velocidadeMaximo
        }
    }

    // metodo public
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const porche = new Carro
porche.acelerar()
console.log(porche.getVelocidadeAtual())

const fusca = new Carro(350, 20)
fusca.acelerar()
console.log(fusca.getVelocidadeAtual())