function calcular()
{	
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;

	var salida = document.getElementById("salida");

	if(a>0 && b>0){
		salida.innerHTML="0";
	}else{
		salida.innerHTML="1"
	}
}



