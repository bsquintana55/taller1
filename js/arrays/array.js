/*
//TOPPING EN SU ENSALADA

    alert('Escriba 5 ingredientes que quiere en su ensalada')
    let uno = prompt('primer ingrediente')
    let dos = prompt('segundo ingrediente')
    let tres = prompt('tercer ingrediente')
    let cuatro = prompt('cuarto ingrediente')
    let cinco = prompt('quinto ingrediente')

    const ensalada = [uno, dos, tres, cuatro, cinco];

    const mezcla = ensalada.join(' ♡ ');
    alert(mezcla); 
*/



/*

//PROMEDIO DE NOTAS
    
   notas=prompt('Digite la CANTIDAD de notas ');
   notas=parseInt(notas)

    let notas = []
    for (let p = 0; p < notas; p++) {

       let nota=prompt( `Indroduzca las notas en ${p} `)


      notas.push(nota)

      console.log(notas)

    }*/




    let cantidad, meses = [], mes, cont;

    cantidad = prompt("¿Cuantos meses quiere digitar?");
    cantidad = parseInt(cantidad);
    
    for(let i = 0; i < cantidad; i++)
    {
        mes = prompt("Digite el nombre del mes ");
        meses.push(mes);
        console.log(meses);
    }
    
    meses.forEach(cantidad => {

        console.log(cantidad,[]);
        alert(cantidad,[],"<br>");
        
    });