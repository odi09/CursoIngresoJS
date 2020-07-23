/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var uno;
	var dos;

	uno = parseInt(document.getElementById('txtIdNumeroUno').value);

	dos = parseInt(document.getElementById("txtIdNumeroDos").value);

	alert("La suma es "+ (uno+dos));

}

