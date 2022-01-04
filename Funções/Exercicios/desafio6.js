/*  Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. */


function calc1(capInic, taxaJur, tempApli){
    return capInic + (capInic * taxaJur * tempApli)

}


function calc2(capInic, taxaJur, tempApli){
    return capInic * (1 + taxaJur) ** tempApli

}

console.log(calc1(2000, 0.10, 2))
console.log(calc2(2000, 0.10, 2))