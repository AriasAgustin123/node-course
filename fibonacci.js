// SERIE DE FIBONACCI

let fibonacci = []
let index = 0

const showFibonacci = (Fibonacci, Index) => {
    Fibonacci.push(0, 1)
    for(let i = 0; Index > i; i++){
        Fibonacci.push(Fibonacci[i]+Fibonacci[i+1])
    }
    return `Estos son los ${Index+2} primeros numeros de la serie de Fibonacci: ${Fibonacci}`
}
console.log(showFibonacci(fibonacci, 10))