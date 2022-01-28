//cadeia de prototipo

Object.prototype.atrib0 = '0'

const avo = { atrib1: 'A' }
const pai = { __proto__: avo, atrib2: 'B' }
const filho = { __proto__: pai, atrib3: 'C', atrib3: '3' }

console.log(filho.atrib0, filho.atrib1, filho.atrib2, filho.atrib3)
