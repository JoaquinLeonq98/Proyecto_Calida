const formulario = document.getElementById('loginAdmin');
const inputs = document.querySelectorAll('#loginAdmin input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	//nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	// correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	// telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
    usuario: false,
    password: false
}//campos

const validarFormulario = (e) => {
    switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
        case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
    }//swith
}//validarFormulario

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('grupoFormulario-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('grupoFormulario-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formularioInputError`).classList.remove('formularioInputError-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('grupoFormulario-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('grupoFormulario-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formularioInputError`).classList.add('formularioInputError-activo');
		campos[campo] = false;
	}//else
}//validarCampo

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    if(campos.usuario && campos.password){
		formulario.reset();

		document.getElementById('formularioMensajeExito').classList.add('formularioMensajeExito-activo');
		setTimeout(() => {
			document.getElementById('formularioMensajeExito').classList.remove('formularioMensajeExito-activo');
		}, 5000);

		document.querySelectorAll('.grupoFormulario-correcto').forEach((icono) => {
			icono.classList.remove('grupoFormulario-correcto');
		});
	} else {
		document.getElementById('formularioMensaje').classList.add('formularioMensaje-activo');
	}
});//formulario event listener