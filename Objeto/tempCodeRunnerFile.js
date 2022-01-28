Object.defineProperty(pessoa, 'dataNacimento', {
    enumerable: true,
    writable: false,
    value: '01/01/1999'
})

pessoa.dataNacimento = '01/01/2002'
console.log(pessoa.dataNacimento)