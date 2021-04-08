//1 - Crear un archivo arrays.js 
let films = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];

//Comprobamos que todo funciona bien si solicitamos el 2° elemento del array y es “totoro”

console.log(films[1]);

//2 - En el mismo archivo nos piden que los nombres de las películas estén en MAYÚSCULAS usando .toUpperCase() para cada elemento.
// Asegurarnos que entregamos el array con todas las películas en mayúsculas
function mayuscula (array){

    for ( let i=0; i < array.length; i ++){
        array[i] = array[i].toUpperCase()
    }
    return array
};
console.log(mayuscula(films))

let cartoons = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fornite"];

//4 - Uno de los desarrolladores advirtió que la última animación es en realidad un videojuego. Eliminar ese último elemento del array cartoons antes de pasarlos a films.

let videojuegos= cartoons.pop();
console.log(cartoons);

//crear una función que agregue cada animación del array cartoons al array films. No quieren un nuevo array, deben agregarse al array films.

function cambiasso (array1,array2){
    let cambiar = array1.pop();
    array2.push(cambiar)
};
cambiasso(cartoons,films);
cambiasso(cartoons,films);
cambiasso(cartoons,films);
cambiasso(cartoons,films);

console.log(films);


//Nos piden crear una función que compare las calificaciones y nos diga si son iguales o diferentes. Nos confirman que están en el orden adecuado y que solo traen valores numéricos del 1 al 10.

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9];

function igualesONo(array1,array2,posicion){
    if (array1[posicion]==array2[posicion]){
    return "Son iguales"
    }else {
        return "Son distintas"
    }
};
console.log(igualesONo(asiaScores,euroScores,0));
console.log(igualesONo(asiaScores,euroScores,1));
console.log(igualesONo(asiaScores,euroScores,2));
console.log(igualesONo(asiaScores,euroScores,3));
console.log(igualesONo(asiaScores,euroScores,4));
console.log(igualesONo(asiaScores,euroScores,5));
console.log(igualesONo(asiaScores,euroScores,6));
console.log(igualesONo(asiaScores,euroScores,7));




