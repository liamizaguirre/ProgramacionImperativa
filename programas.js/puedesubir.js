function puedeSubir(altura,vieneAcompaniado,penalizado){
  if (altura>1.4 && altura<2){
      return true;
  }else if (altura<1.4 && vieneAcompaniado && altura>1.2){
          return true
      } else { 
      return false
      } 
    }

  
    
console.log(puedeSubir(1.3, true))