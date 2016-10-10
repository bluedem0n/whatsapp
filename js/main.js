window.addEventListener("load", cargaPagina);

var inputMensaje = document.getElementById("mensajes");
var contactos = document.getElementById("contactos");

function cargaPagina() {

	inputMensaje.addEventListener("click", limpiar);
	inputMensaje.addEventListener("keyup", enviarMensaje);
	contactos.addEventListener("click", escribir);
	/*contactos.addEventListener("focus",vistaPrevia);*/
}

function escribir(e) {
	e.preventDefault();

		var chatMensaje = document.getElementById("contenedor");
		var imagenPerfil = document.getElementById("imagen");
		imagenPerfil.setAttribute("src", "image/raymi.jpg");
		imagenPerfil.classList.add("wh-44");

		var nombre = document.getElementById("nombre");
		nombre.classList.add("w-contact-name");
		nombre.textContent = "Raymi Saldomando";

		var previomensaje = document.getElementById("previomensaje");
			previoMensaje.classList.add("w-users-messages");

		chatMensaje.appendChild(nombre);
		chatMensaje.appendChild(imagenPerfil);
		chatMensaje.appendChild(previomensaje);


	/*var chatMensaje = document.getElementById("contenedor");

	var imagenPerfil = document.getElementById("imagen");
	imagenPerfil.classList.add("wh-44");

	var contactos = document.getElementsByClassName("avatar");

	var nombre = document.getElementById("nombre");
	nombre.classList.add("w-contact-name");

	var previo = document.getElementById("previo");
	previo.classList.add("w-users-messages");

	if (contactos[0]) {
		imagenPerfil.setAttribute("src", "image/raymi.jpg");
		nombre.textContent = "Raymi Saldomando";

	} else if (contactos[1]) {
		imagenPerfil.setAttribute("src", "image/mariana.jpg");
		nombre.textContent = "Mariana Costa";
	} else if (contactos[2]) {
		imagenPerfil.setAttribute("src", "image/anamaria.jpg");
		nombre.textContent = "Ana Maria Martinez";
	} else if (contactos[3]) {
		imagenPerfil.setAttribute("src", "image/rodulfo.jpg");
		nombre.textContent = "Rodulfo Prieto";
	} else if (contactos[4]) {
		imagenPerfil.setAttribute("src", "image/andrea.jpg");
		nombre.textContent = "Andrea Lamas";
	} else if (contactos[5]) {
		imagenPerfil.setAttribute("src", "image/mariapaula.jpg");
		nombre.textContent = "Maria Paula";
	}*/

	chatMensaje.appendChild(nombre);
	chatMensaje.appendChild(imagenPerfil);
	chatMensaje.appendChild(previo);
}

function enviarMensaje(e) {
	e.preventDefault();

	var key = e.keyCode;

	if (key === 13) {

		var texto = inputMensaje.value;
		var panelChat = document.getElementById("panelChat");

		var burbuja = document.createElement("div");
		burbuja.classList.add("w-message", "w-message-out");

		var contenedorTexto = document.createElement("div");
		contenedorTexto.classList.add("w-message-text");

		var textoMensaje = document.createElement("p");
		textoMensaje.textContent = texto;

		var horaTotal = document.createElement("div");
		horaTotal.classList.add("time");

		var tiempo = new Date();
		var hora = tiempo.getHours();
		var minuto = tiempo.getMinutes();
		var total = hora + ":" + minuto;

		if (minuto < 10) {
			minuto = "0" + minuto;
		}

		horaTotal.innerText = total;
		inputMensaje.value = "";


		burbuja.appendChild(contenedorTexto);
		contenedorTexto.appendChild(textoMensaje);
		contenedorTexto.appendChild(horaTotal);
		panelChat.appendChild(burbuja);

	}
}

function limpiar() {
	inputMensaje.value = " ";
	inputMensaje.focus();
}

function vistaPrevia() {
	/*var avatar = document.getElementById("avatar");
	var vista = document.createElement("span");
		vista.classList.add("vista-previa" , "msg");
		vista.textContent = "No se pique!!!";
		avatar.appendChild(vista);*/
	alert("Estas en foco");
}