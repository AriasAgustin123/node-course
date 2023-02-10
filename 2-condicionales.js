let edad = 17
let mayoria
//operador ternario - evaluar condiciones con una instuccion por salida
edad >= 18 ? mayoria = true : mayoria = false
//impirmir ejemplo
console.log('Edad:', edad)
console.log('Cumple con la mayoria de edad?', mayoria)
//condicional if else - ejecutar grandes bloques de codigo mediante condiciones

if(edad >= 18){
    mayoria = true
    let mensaje = 'Eres mayor de edad (desde un if)'
    if(mayoria===true){
        console.log(mensaje)
    }
}else{
    mayoria = false
    let mensaje = 'No eres mayor de edad (desde un if)'
    if(mayoria===false){
        console.log(mensaje)
    }
}

//select case / switch - estructura de control que proporciona varias opciones para una condicion especifica
let comidas = ['pizza', 'milanesa', 'fideos', 'guiso']
let i = 3 //inidce del menu de comidas
switch(i){ //ingredientes de cada comida que eligas con el indice
    case 0:
        console.log(comidas[i], ': Masa, salsa y queso')
        break
    case 1:
        console.log(comidas[i], ': Suprema, pan rallado y condimentos')
        break
    case 2:
        console.log(comidas[i], ': Harina y huevo')
        break
    case 3:
        console.log(comidas[i], ': Lo que quieras papá')
        break
}