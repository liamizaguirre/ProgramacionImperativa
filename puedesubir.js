let puedeSubir = (altura, vieneAcompaniado, penalizado) =>{
    if (penalizado){
      return  "Usted ha sido penalizado, usted se tiene que arrepentir"
    }else{ 
    if (altura>=1.4 && altura<2 || altura<1.4 && altura>1.2 && vieneAcompaniado ){
      return "Puede subir"
    }else{ 
      if (altura<1.4 && altura>=1.2 && vieneAcompaniado == false){
        return "Necesita un acompañante"
      }else{
        return "No puede subir"
      }
    }
  }
}
  console.log(puedeSubir(1.2, false, false))