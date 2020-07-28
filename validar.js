var nombre="", apellidos="", rut="", edad="", correo="", fecha="";

document.getElementById("nombre").addEventListener("focus", function(){$('#box').remove()});

	function validarNombre(){
		nombre = document.getElementById("nombre").value;
		var patt = /^[a-zA-Z\s]*$/;

		if (nombre.length<2 || nombre.length>30){
			alert("...El nombre debe contener entre 2 y 30 caracteres");
			return false;
		} 
		    else if(!patt.test(nombre)){//si no es un numero devuelve verdadero, por lo tanto si ingresa un numero será falso
		    	alert("El nombre debe contener letras");
		    	console.log("valor nombre: "+nombre + "\nvalor nombre: " + nombre);
		    	return false;
		    }
		    else {
		    	return true;
		    }
	}

	function validarApellidos(){
		apellidos = document.getElementById("apellidos").value;
		var patt = /^[a-zA-Z\s\-\'\´\`]*$/;
		
		if (apellidos.length <2 || apellidos.length>80){
			alert("...Los apellidos deben contener entre 2 y 80 caracteres");
			return false;
		} 
	    else if(!patt.test(apellidos)){//validar que ingrese solo letras, ' , - , o espacio
	       alert("Los apellidos deben tener letras y en algunos casos apóstrofe: ', guión: -,o espacio: ");
	        console.log("valor apellidos: "+apellidos + "\nvalor apellidos: " + apellidos);
	        return false;
	    }
	    else {
	    	return true;
	    }
	}

	function validarCorreo(){
		correo = document.getElementById("correo").value; 
		var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; /*https://www.w3resource.com/javascript/form/email-validation.php*/
		if (correo.length <10 || correo.length>100){
			alert("...El correo debe contener entre 10 y 100 caracteres");
			return false;
		} 
		else if(!patron.test(correo)){
			alert("...Ingrese un correo válido!!");
			return false;
		}
		else {
			return true;
		}    
	}

	function validarRut(){
	    rut = document.getElementById("rut").value;
	    var patron = /^[0-9]+\-{1}[0-9kK]{1}$/;
	    if(!patron.test(rut)){
	        alert("...El Rut debe ser escrito en el formato: 11222333-K");
	        console.log("valor rut: "+rut);
	        return false;
	    }
	    else {
	    	console.log("valor rut: "+rut);
	        return true;
	    }
	}

	function validarEdad(){
		edad = document.getElementById("edad").value;
		patron = /[0-9]{1,2}/; 
		if (!patron.test(edad)){
			console.log("valor edad: "+edad);
	    	alert("La edad sólo puede contener números");
	    	return false;
		}

		else if (edad < 18 || edad > 99){
			alert("...La edad debe estar entre 18 y 99 años");
			console.log("valor edad: "+edad);
			return false;
		} 
		else {
			console.log("valor edad: "+edad);
			return true;
		}
	}

	function validarFecha(){
		fecha=document.getElementById("fecha").value;
		var patron = /\d{2}\-\d{2}\-\d{2,4}$/;
		var dia, mes, anio;
		dia=fecha.substring(0,2);console.log(dia);
		mes=fecha.substring(3,5);console.log(mes);
		anio=fecha.substring(6);console.log(anio);
		
		if(!patron.test(fecha)){
        	alert("...La fecha debe estar en el formato dd-mm-aaaa,\npor ejemplo: 01-12-2020");
			console.log("valor fecha: "+fecha);
        	return false;
    	}
    	else {
    		//validar dia
	    	if(dia< 1 || dia > 31){
	    		alert("Los días pueden estar entre 01 y 31");
	    		console.log("valor dia: "+dia);
	        	return false;
	    	}
	    	// validar mes
	    	else if(mes < 1 || mes > 12){
	    		alert("Los meses pueden estar entre 01 y 12");
				console.log("valor mes: "+mes);
	        	return false;
	    	}
	    	// validar anio
	    	else if(anio < 2020 || anio > 2021){
	    		console.log("valor anio: "+anio);
	    		alert("Puede reservar sólo para los años 2020 y 2021");
	        	return false;
	    	}
	    	else {
	    		return true;	
	    	}	
    	}
	}

document.getElementById("nombre").addEventListener("blur", validarNombre);
document.getElementById("apellidos").addEventListener("blur", validarApellidos);
document.getElementById("rut").addEventListener("blur", validarRut);
document.getElementById("edad").addEventListener("blur", validarEdad);
document.getElementById("correo").addEventListener("blur", validarCorreo);
document.getElementById("fecha").addEventListener("blur", validarFecha);
document.getElementById("reservar").addEventListener("click", validar);

function validar(){
	console.log("valor validarnombre() "+validarNombre()); 
	console.log("valor validarApellidos() "+validarApellidos()); 
	console.log("valor validarCorreo() "+validarCorreo()); 
	console.log("valor validarRut() "+validarRut()); 
	console.log("valor validarEdad() "+validarEdad()); 
	console.log("valor validarFecha() "+validarFecha()); 
	console.log("valor correo: "+ correo);
	console.log("valor rut: "+ rut);
	console.log("valor edad: "+edad);
	console.log("valor fecha: "+fecha);

	if  ( ( ( (validarNombre() && validarApellidos()) 
			&& (validarCorreo() && validarRut()) )  
			&& validarEdad()  ) && validarFecha() ) {		
		$('#reservar').removeClass("disabled");
		reservar();
	} 
	else {
		return alert("Por favor complete los datos según los formatos indicados");
	}
}

let contador=0;
function reservar(){
    var especialidad=document.getElementById("especialidades")[document.getElementById("especialidades").selectedIndex].textContent;
    var hora = document.getElementById("horas")[document.getElementById("horas").selectedIndex].textContent;
    
		$('#formulario').before(`<div id="box" class="text-center bg-warning font-weight-bold rounded col-sm-10 col-md-8 col-lg-6 py-2 mx-auto my-2"></div>`);    

        box.innerHTML = "Estimado(a) "+ nombre+ " " +apellidos+ ", su hora para " +especialidad
        				+ " ha sido reservada para el día "+fecha+", a las "+hora+". "
        				+ "Además, se le envió un mensaje a su correo "+correo
        				+" con el detalle de su cita.\nGracias por preferirnos."; 
  contador++;
  limpiarForm();
}

function limpiarForm(){
	if (contador>0){
		$('#nombre').val('');
		$('#apellidos').val('');
		$('#rut').val('');
		$('#edad').val('');
		$('#correo').val('');
		$('#fecha').val('');
		$('#hora').val('');
		$('#especialidades').val('');
	}	
	contador=0;
}
