//HALLAR EL TIPO DE CUERPO PARA MUJER


alert('1. SI LA MEDIDA DE TUS HOMBROS O BUSTO ES 5% MÁS GRANDE QUE LA MEDIDA DE TU CADERA  ')
alert('2. LAS MEDIDAS DE TUS HOMBROS Y TU CADERA SON PARECIDAS, ES DECIR QUE ENTRE ELLAS NO HAY UNA DIFERENCIA MAYOR A UN 5%, Y A SU VEZ LA MEDIDA DE TU CINTURA ES UN 25% MENOR A ÉSTAS.')
alert('3. SI LA EXTENSIÓN DE TUS CADERAS ES ALREDEDOR DE UN 5% MAYOR A LA MEDIDA DE TUS HOMBROS O PECHO. ')
alert('4. TUS HOMBROS Y CADERAS TIENEN MEDIDAS SIMILARES Y LA DIFERENCIA CON TU CINTURA ES COMO MUCHO, DE UN 25%. ')
alert( '5. TU ABDOMEN ES ALREDEDOR DE UN 10% MAYOR A LAS MEDIDAS DE TUS HOMBROS Y CADERAS ')

let seguir=1;
let  cont=0;

do{

    let tipo = prompt('Digite un su tipo de cuerpo segun lo anterior') ;

   switch (tipo) {

    case '1':
        alert('Tú tipo de cuerpo es: TRIANGULO INVERTIDO')
        cont=cont+1;
    break;
   
    case '2':
        alert('Tú tipo de cuerpo es: RELOJ DE ARENA')
        cont=cont+1;
    break;

    case '3':
        alert('Tú tipo de cuerpo es: TRIANGULAR O PERA')
        cont=cont+1;
    break;

    case '4':
        alert('Tú tipo de cuerpo es: RECTANGULAR')
        cont=cont+1;
    break;

    case '5':
        alert('Tú tipo de cuerpo es: OVALADA O MANZANA')
        cont=cont+1;
    break;

    default:
        alert('Por favor mire bien las opciones y digite 1 para volverlo a intentar')
    break;
   }


   seguir=prompt("Para volver saber su tipo de cuerpo digite 1, si no, digite 2 ");
   seguir=parseInt(seguir);


}while (seguir==1)

alert("La cantidad de veces que trataste de encontrar tu tipo de cuerpo fueron fueron: "+cont+" Espero que lo haya encontrado");
    

//DESGLOSAR
/*

 do{

    

resto = numero%10;
numero = parseInt(numero/10);
console.log(resto);
}while( numero>0 )

*/