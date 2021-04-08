clavadosParticipanteA = [5,8,4,9,5]
clavadosParticipanteB = [8,7,8,6,8]

clavadoprueba1 = [1,2]
clavadoprueba2 = [1,2]

let puntajePorPromedio = Array => {
    let suma =0
    for(let i=0; i<Array.length; i++){
        suma+=Array[i]
    }
    promedio = suma/Array.length
    return promedio
};

let puntajePorMayor = Array => {
    let suma =0
    for (let i = 0; i < Array.length; i++) {
        suma += Array[i]
    }
    return suma
};



function competencia(resultadosA,resultadosB,calcularPuntaje){
let resultado1 = calcularPuntaje(resultadosA)
let resultado2 = calcularPuntaje(resultadosB)

if (resultado1>resultado2){
    console.log("El ganador fue el Participante A!!!")
}if (resultado2>resultado1){
    console.log("El ganador fue el Participante B!!!")
}else {
    console.log("Esto es un empate!!!")
}
}

competencia(clavadosParticipanteA,clavadosParticipanteB,puntajePorMayor)
competencia(clavadoprueba1,clavadoprueba2,puntajePorMayor)
