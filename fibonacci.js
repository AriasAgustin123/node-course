// let añoNacimiento = 2004
// let añoActual = 2023
// let nombre = 'agustin'

// function calcularEdad(nacimiento, actual){
//     return actual - nacimiento
// }

// console.log(nombre, 'tiene', calcularEdad(añoNacimiento, añoActual), 'años')

// const mostrarMenu = () => {
//     const comidas = ['fideos', 'asado', 'milanesa']
//     console.log('Las comidas del menu son:')
//     for(let i = 0; comidas.length > i; i++){
//         console.log(comidas[i])
//     }
// }

// mostrarMenu()

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