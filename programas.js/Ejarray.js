let frutas = ["banana", "kiwi", "manazana", "pera"];
let verduras = ["lechuga"]
function contiene(array,elemento){
    if (array.indexOf(elemento)!= -1){ 
    return true}
    else 
        return false;

};
console.log(contiene(frutas,"mangobanana"));


function trasladarUltimoElemento(arrayUno, arrayDos){
   let ultimo= arrayUno.pop();
   arrayDos.push(ultimo);
   
}
trasladarUltimoElemento(frutas,verduras)
console.log(frutas);
console.log(verduras);
