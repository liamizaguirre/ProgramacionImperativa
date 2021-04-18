// Ejercicio if Ternario: modificar if else por ? : //

let puedoCruzar = colorSemadoro =>{
    return colorSemadoro== "rojo" || colorSemadoro == "amarillo" ? "No puedo cruzar" :
    "Puedo cruzar"
}

console.log(puedoCruzar("eee"))

let mayorEdad = edad => {
    return edad <18 ? "Sos menor de edad pibe, tomatela" : "Bien ahi capo, sos mayor, pasa"
}

console.log(mayorEdad(17))

// Ejercicio Control de Flujo //
//1//
let parImpar = numero => {
    return numero%2 == 0 ? "El numero es par" : "El numero es impar"
}
console.log(parImpar(8))

//2//
let peaje = pago =>{
    return pago ? "Levante la barrera" : "No la levantes un carajo"
}
console.log(peaje(false))

//3//
let elMismoONo = numero => {
    return numero == Math.random()*10 ? "El numero es el mismo" : "Es otro numero"
}
console.log(elMismoONo(8))

//4//
let esNavidadONo = fecha => {
    return fecha == "25/12" ? "Es navidad papa" : "No es navidad"
}
console.log(esNavidadONo("25/12"))

//5//
let diasDelMes = mes =>{
    let respuesta = ""
    switch (mes){
        case "Enero":
           respuesta ="El mes tiene 31 dias";
            break
        case "Marzo":
                respuesta ="El mes tiene 31 dias";
                 break
        case "Mayo":
                respuesta ="El mes tiene 31 dias";
                 break
        case "Julio":
                respuesta ="El mes tiene 31 dias";
                 break
        case "Agosto":
                respuesta ="El mes tiene 31 dias";
                 break
        case "Octubre":
                respuesta ="El mes tiene 31 dias";
                 break
        case "Diciembre":
                respuesta ="El mes tiene 31 dias";
                 break
        case "Febrero" :
          respuesta =  "El mes tiene 28 dias";
            break
        case "Abril" :
          respuesta =  "El mes tiene 30 dias";
            break
        case "Junio" :
          respuesta =  "El mes tiene 30 dias";
            break
        case "Septiembre" :
          respuesta =  "El mes tiene 30 dias";
            break
        case "Noviembre" :
          respuesta =  "El mes tiene 30 dias";
            break
        default:
          respuesta =  "Ingresaste mal el mes flaco";
    }
    return respuesta
}
console.log(diasDelMes("Septiembre"))

//6//
let apruebaONo = nota =>{
    if (nota<4 && nota>=0){
        return "Recursaste Pibeee"
    }else if (nota>= 4 && nota<7){
        return "A recu"
    }else if (nota >=7 && nota<=10){
        return "Bien pibe aprobaste"
    }else{
        return "Eso no es una nota del 0 al 10"
    }
    }

console.log(apruebaONo(7))

//7//
let abrirParacaidas = (altura, velocidad) =>{
    return altura<=3000 && altura >=2000 && velocidad<1000 ? "Abri el paracaidas" : "No lo abras che"
}
console.log(abrirParacaidas(1000,999))

//8//
let precioSandwich = (tomate, papa, huevo) =>{
    if (tomate && papa && huevo){
        return "El precio es $280"
    }else if (tomate && papa){
            return "El precio $220"
        }else if (tomate && huevo){
            return "El precio es $230"
        }else if (huevo && papa){
            return "El precio es $260"
        }else if(tomate){
            return "El precio es $170"
        }else if(papa){
            return "El precio es $200"
        }else if (huevo){
            return "El precio es $210"
        }else {
            return "El precio es $150"
        }
    }

    console.log(precioSandwich(false, true, false))
