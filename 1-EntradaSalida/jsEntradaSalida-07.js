/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno;
	var dos;
	var resultado;

	uno=parseInt(document.getElementById("txtIdNumeroUno").value);
	dos=parseInt(document.getElementById("txtIdNumeroDos").value);

resultado=uno+dos;
alert("El resultado es "+resultado);}

function restar()
{
	var uno;
	var dos;
	var resultado;

	uno=parseInt(document.getElementById("txtIdNumeroUno").value);
	dos=parseInt(document.getElementById("txtIdNumeroDos").value);

resultado=uno-dos;
alert("El resultado es "+resultado); 
}
function multiplicar()
{
	var uno;
	var dos;
	var resultado;

	uno=parseInt(document.getElementById("txtIdNumeroUno").value);
	dos=parseInt(document.getElementById("txtIdNumeroDos").value);
resultado=uno*dos;
alert("El resultado es "+resultado); 
}
function dividir()
{	
	var uno;
	var dos;
	var resultado;

	uno=parseFloat(document.getElementById("txtIdNumeroUno").value);
	dos=parseFloat(document.getElementById("txtIdNumeroDos").value);

resultado=uno/dos;
alert("El resultado es "+resultado.toFixed(2)); 
}


