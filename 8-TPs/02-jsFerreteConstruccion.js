/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    
    var resultado;
    
    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);
    
    resultado=2*largo+2*ancho;

    alert("La cantidad de alambre para tres vueltas es de  "+resultado*3);

}
function Circulo () 
{
    var radio;
    var resultado,

    radio=parseInt(document.getElementById("txtIdRadio").value);

    resultado=2*radio;

    alert("La cantidad de alambre para tres vueltas es de "+resultado*3);


}
function Materiales () 
{
    var largo;
    var ancho;
    
    var resultado;
    
    largo=parseFloat(document.getElementById("txtIdLargo").value);
    ancho=parseFloat(document.getElementById("txtIdAncho").value);

    resultado=2*largo+2*ancho;

    alert("Se necesitan "+ resultado*2+ " sacos de Cementos y "+ resultado*3 + " sacos de Cal");

}