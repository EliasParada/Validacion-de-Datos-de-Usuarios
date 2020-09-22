var login = document.getElementById("login");
login.disabled = true;

var inicio = function() {
	var start = document.getElementById("start");
	var control = document.getElementById("control");
	var propiety = document.getElementById("propiety");
	var event = document.getElementById("event");
	start.setAttribute("class", "sections inzoom");
	control.setAttribute("class", "sections onzoom");
	propiety.setAttribute("class", "sections onzoom");
	event.setAttribute("class", "sections onzoom");
}

var vcontrol = function() {
	var start = document.getElementById("start");
	var control = document.getElementById("control");
	var propiety = document.getElementById("propiety");
	var event = document.getElementById("event");
	start.setAttribute("class", "sections onzoom");
	control.setAttribute("class", "sections inzoom");
	propiety.setAttribute("class", "sections onzoom");
	event.setAttribute("class", "sections onzoom");
}

var vpropiedad = function() {
	var start = document.getElementById("start");
	var control = document.getElementById("control");
	var propiety = document.getElementById("propiety");
	var event = document.getElementById("event");
	start.setAttribute("class", "sections onzoom");
	control.setAttribute("class", "sections onzoom");
	propiety.setAttribute("class", "sections inzoom");
	event.setAttribute("class", "sections onzoom");
}

var vevento = function() {
	var start = document.getElementById("start");
	var control = document.getElementById("control");
	var propiety = document.getElementById("propiety");
	var event = document.getElementById("event");

	start.setAttribute("class", "sections onzoom");
	control.setAttribute("class", "sections onzoom");
	propiety.setAttribute("class", "sections onzoom");
	event.setAttribute("class", "sections inzoom");
}



let seleccionar = document.querySelector('select');
let parrafo = document.getElementById('lblIdioma');

seleccionar.addEventListener('change', establecerIdioma);

function establecerIdioma() {
  let eleccion = seleccionar.value;
  if (eleccion === 'ingles') {
    parrafo.innerHTML = "Hellos user";
  } else if (eleccion === 'español') {
    parrafo.textContent = 'Hola usuario';
  } else if (eleccion === 'frances') {
    parrafo.textContent = 'Bonjour utilisateur';
  } else {
    parrafo.textContent = 'Ciao utente';
  };
};

var nombre = document.getElementById('Name');
var lastanem = document.getElementById('LastName');
var nickname = document.getElementById('NickName');
var years = document.getElementById('Years');
var save = document.getElementById('Save');


function pSave() {
	nombre.disabled = true;
	lastanem.disabled = true;
	nickname.disabled = true;
	years.disabled = true;
	save.disabled = true;
	save.innerHTML = "Guardando";
	document.getElementById("progress").style.width = "100%";
}



function pReset() {
	nombre.disabled = false;
	lastanem.disabled = false;
	nickname.disabled = false;
	years.disabled = false;
	save.disabled = false;
	nombre.value = "";
	lastanem.value = "";
	nickname.value = "";
	years.value = "";
	save.value = "Guardar";
	document.getElementById("progress").style.width = "0";
}

var tnombre = document.getElementById("tnombre");
var tapellido = document.getElementById("tapellido");
var pass = document.getElementById("pasword");
var repeat = document.getElementById("repeat");
var confirm = document.getElementById("confirm");
var continuar = document.getElementById("continuar");

function confirmar() {
	if (pass.value === repeat.value) {
		confirm.innerHTML = "Contraseña correcta.";
		login.disabled = false;
	} else {
		confirm.innerHTML = "Contraseña incorrecta.";
		login.disabled = true;
	}
  
}

function tLogin() {
	continuar.innerHTML = "Este botón realmente no tiene ninguna utilidad.";
}

function tReset(){
	tnombre.value = "";
	tapellido.value = "";
	pass.value = "";
	repeat.value = "";
	confirm.innerHTML = "";
	continuar.innerHTML = "";
	login.disabled = true;
}