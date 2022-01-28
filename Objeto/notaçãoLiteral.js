const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c }
const objt2 = { a, b, c}
console.log(obj1, objt2)

const nomeAttr = 'nota'
const valorAttr = 7.92

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcção1: function(){
        ////
    },
    função2(){
        //// 
    }

}

console.log(obj5)