/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var uno;
	var dos;
	var resultado;

	uno=parseInt(document.getElementById("txtIdNumeroDividendo").value);

	dos=parseInt(document.getElementById("txtIdNumeroDivisor").value);

	resultado=uno%dos;

	alert("El resto es "+resultado);

}
