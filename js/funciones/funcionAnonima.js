    /*//Funcion por anonimo

    //Invocar la función
    alert("Sea bienvenido a vivi, para verificar si puede entrar al bar... ")
    let edad
    let edadVivi=function(edad)
    {
        edad=prompt("Digite aqui su edad")
        edad=parseInt(edad)

        if(edad >= 18){
            alert(`Sea bienvenido, ¡puede ingresar al bar!`);
        }
        else if(edad>=1 && edad<18){
            alert(`Hagame el favor y vaya para la casa a dormir, usted es MENOR DE EDAD`);
        }
        else if(edad<1){
            alert(`Ingrese una edad valida`);

        
    }
    return edad

    }
    edadVivi(edad);*/


    let edad=function(edad){
        mayor=(edad>=18)
        //si
        ?alert(`Usted es mayor de edad`)
        //sino
        :alert(`Usted es menor de edad`);
    }
    
    let e=prompt("Por favor ingrese su edad");
    edad(e);