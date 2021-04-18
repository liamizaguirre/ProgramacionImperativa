// Ejercicio 1: funciones que recibe pulgadas y las pasa a cm//
let pulgadaACentimetro = pulgada => {
	return pulgada*2.54
}

console.log(pulgadaACentimetro(2))

//Ejercicio 2: convierte un string en un URL //
let url = string => {
	 return "http://www."+string+".com"
	}

console.log(url("pepito"))

// Ejercicio 3: admiracion //
let admiracion = frase =>{
	return "¡"+frase+"!"
}

console.log(admiracion("Dale Boca"))

// Ejercicio 4: Edad de perros//
let edadPerros = edad =>{
	return edad*7
}
console.log(edadPerros(4))

//Ejercicio 5: Edad de mi Hora a partir de sueldo mensual//
let sueldoHorario = sueldoMensual =>{
	return sueldoMensual/80
}

console.log(sueldoHorario(25000))

//Ejercicio 6: circunferencia a partir del radio//
let circunferencia = radio =>{
	return radio*2*3.1416
}
console.log(circunferencia(3))

//Ejercicio 7: verificacion si el string esta en mayusculas//
let mayusculas= texto =>{
	let mayu = texto.toUpperCase()
	if (mayu == texto){
		return "TRUE"
	}else {
		return "FALSE"
	}
}
console.log(mayusculas("PROBANDO"))

//Ejercicio 8: tipo de dato//
let tipoDeDato = dato =>{
	return typeof dato
}

console.log(tipoDeDato("hola"))

// Ejercicio Fecha y Hora//
let fechaYHora = () =>{
	return Date()
}
console.log(fechaYHora())
