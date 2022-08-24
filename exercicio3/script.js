function soma(n1, n2){
    return (n1 + n2)
}

function subtracao(n1, n2){
    return(n1-n2)
}

function multiplicacao(n1, n2){
    return(n1*n2)
}

function divisao(n1, n2){
    return(n1/n2)
}

const num1 = +prompt("Insira um número")
const num2 = +prompt("Insira outro número")

console.log(`${num1} + ${num2} = ${soma(num1, num2)}\n${num1} - ${num2} = ${subtracao(num1, num2)}\n${num1} * ${num2} = ${multiplicacao(num1, num2)}\n${num1} % ${num2} = ${divisao(num1, num2)}`)