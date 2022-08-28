 	 
let respuesta = "Colucci"; 	 	 
let intentos = false; 	 	 

for (let contador = 1; contador < 4 && intentos === false; contador++) {	 

 let usua = prompt("¿Cúal era el apellido de Mia en la telenovela Rebelde: ");	

    if (usua === respuesta) { 	
        intentos = true;
	 
    alert("Muy bien, su apellido era Colucci, Mia Colucci ");

    }else if (usua !== respuesta) {

        alert("Es incorrecto vuelve a intentarlo, Es tu " +contador + " intento, recuerda que son 3");

    }else if (usua =!respuesta && contador >= 3 ) {

        alert("Perdiste");

    }
 
    
}	 	
   
    
    
