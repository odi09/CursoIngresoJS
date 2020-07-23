/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var Puno;
    var Pdos;
    var Ptres;
    var resultado;

    Puno=parseInt(document.getElementById("txtIdPrecioUno").value);
    Pdos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    Ptres=parseFloat(document.getElementById("txtIdPrecioTres").value);

    resultado=Puno+Pdos+Ptres;

    alert("La suma es "+resultado);


}
function Promedio () 
{
var Puno1;
var Pdos1;
var Ptres1;

Puno1=parseFloat(document.getElementById("txtIdPrecioUno").value);
Pdos1=parseFloat(document.getElementById("txtIdPrecioDos").value);
Ptres1=parseFloat(document.getElementById("txtIdPrecioTres").value);

resultado=(Puno1+Pdos1+Ptres1)/3;

alert("El promedio es "+resultado);

	
}
function PrecioFinal () 
{

    var Puno1;
    var Pdos1;
    var Ptres1;
    
    Puno1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    Pdos1=parseFloat(document.getElementById("txtIdPrecioDos").value);
    Ptres1=parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    resultado= (Puno1+Pdos1+Ptres1)*1.21;
    
    alert("El precio es "+resultado.toFixed(2));   
	
}