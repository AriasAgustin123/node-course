let edad = 18 //numero entero
let altura = 1.80 //numero decimal
let nombre = 'Agustin' //cadena de texto
let estudia = true //booleano
let domicilio = ['la calandria', 474] //arreglo
const yo = {
    edad,
    altura,
    nombre,
    estudia,
    domicilio
} //objeto

//imprimir todas los valores
console.log('Me llamo', yo.nombre,', tengo', yo.edad, ', mido', yo.altura,'.')
console.log('Vivio en:', yo.domicilio[0], yo.domicilio[1], 'barrio El Jaguel.')
console.log('Actualmente estudio?', yo.estudia)
