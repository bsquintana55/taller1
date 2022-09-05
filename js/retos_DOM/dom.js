
var texto = document.getElementById("inputid");
var boton = document.getElementById("botonpala");
var caja = document.getElementById("col1-1");
var boton2 = document.getElementById("col2");
var granS = document.getElementById("granS");

function palabra()
{
    alert(`La longitud de su texto es: ${texto.value.length}`);
}
boton.addEventListener(`click`,palabra)


caja.addEventListener(`mouseover`, function() 
{
    caja.classList.replace("col1-1","col1-2")
});

caja.addEventListener(`mouseout`, function() 
{
    caja.classList.replace("col1-2","col1-1")
});


boton2.addEventListener(`click`, function()
{
    boton2.classList.replace("col2","col2-1")
});



granS.addEventListener(`click`, () => {
    console.log('¡Suelta al ratooon!');
    console.log('Soltaste al raton :(');
});