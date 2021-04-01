let nombre = ["Nicolas Lopez", "Esteban Piazza", "Jose Fermoso", "Juana Fernandez"];
let edad = [27,28,33,26];
let peso = [83.5, 80.1, 63.7, 55.0];
let altura = [1.70, 1.76, 1.53, 1.62];
let tienePrepaga = [true, true, false, true];

let imc1 = peso[0]/(altura[0]**2);
let imc2 = peso[1]/(altura[1]**2);
let imc3 = peso[2]/(altura[2]**2);
let imc4 = peso[3]/(altura[3]**2);
let IMC = [imc1, imc2, imc3, imc4];

let persona1 = nombre[0] + " tiene " + edad[0] + " años y su indice de masa corporal es de " + imc1;
let persona2 = nombre[1] + " tiene " + edad[1] + " años y su indice de masa corporal es de " + imc2;
let persona3 = nombre[2] + " tiene " + edad[2] + " años y su indice de masa corporal es de " + imc3;
let persona4 = nombre[3] + " tiene " + edad[3] + " años y su indice de masa corporal es de " + imc4;

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);
