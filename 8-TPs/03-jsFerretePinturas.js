/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var fahrenheit;
    var resultado;
    
    fahrenheit=parseFloat(document.getElementById("txtIdTemperatura").value);

    resultado=(fahrenheit-32)*5/9;

    alert(fahrenheit +" Fahrenheit son "+ resultado.toFixed(3) +" Centígrados");
}

function CentigradosFahrenheit () 
{
    var Centígrados;
    var resultado; 

    Centígrados=parseFloat(document.getElementById("txtIdTemperatura").value);

    resultado=(Centígrados*9/5)+32;

    alert(Centígrados + " Centrigrado son "+ resultado + " Fahrenheit");
    
}
