

// función por declaracion

   alert("Sea bienvenido a vivi, para verificar si puede entrar al bar... ")

      function viviEdad() {
      

      let edad= prompt("Digite aqui su edad");
      edad=parseInt(edad);

      if(edad >= 18){
            alert(`Sea bienvenido, ¡puede ingresar al bar!`);
      }
      else if(edad>=1 && edad<18){

            alert(`Hagame el favor y vaya para la casa a dormir, usted es MENOR DE EDAD`);
      }
      else if(edad<1){
            alert(`Ingrese una edad valida`);

      }

      }//cierra la funcion

      //Invoca la función, como si fuera un metodo
      viviEdad();




