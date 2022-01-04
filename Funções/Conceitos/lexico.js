const valor = 'Global'

function Função () {
    console.log(valor)
}

function exe(){
    const valor = 'Local'
    Função()
}

exe()