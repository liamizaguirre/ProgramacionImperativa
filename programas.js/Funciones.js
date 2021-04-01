//Ejercicio 1
function calcularIndiceDeMasaCorporal(altura,peso){
    return peso/altura**2
};
//Ejercicio 2
function suma(numero1,numero2){
    return numero1+numero2
};
function resta(numero1, numero2){
    return numero1-numero2
};
function multiplicacion(numero1,numero2){
    return numero1*numero2
};
function division(numero1,numero2){
    return numero1/numero2
};
//Ejercicio 3
let nombreJugador="Juan Roman Riquelme";
let golesJugador=26;
let precioEnDolares=100000;

function hacerGol(){
    golesJugador = golesJugador+1 
    console.log ("GOL!!!!!") 
    precioEnDolares=(precioEnDolares+10000)
};

//Ejercicio 4
function hattrick (){
    hacerGol()
    hacerGol()
    hacerGol()
    precioEnDolares = precioEnDolares*1.1
}

//Salida en pantalla
console.log(calcularIndiceDeMasaCorporal(1.81,63));
console.log(suma(1,2));
console.log(resta(1,2));
console.log(multiplicacion(1,2));
console.log(division(1,2));

hacerGol();
hacerGol();
console.log(golesJugador);
console.log(precioEnDolares);
hattrick();
console.log(golesJugador);
console.log(precioEnDolares);