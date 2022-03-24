const a = [{usuario:'jleon', contra:'jleon12'}, {usuario:'cmota', contra:'cmota12'}, {usuario:'areyes', contra:'areyes12'},{usuario:'mpiña', contra:'mpiña12'}, {usuario:'nquintero', contra:'nquintero12'}, {usuario:'frivera', contra:'frivera12'}];
function prueba (usuario, contra){
    let b=false;
    for (let i=0; i<a.length; i++){
        if (a[i].usuario===usuario){
            if (a[i].contra===contra){
                let b = true;
                return b;
                break
            } else {
                break
            }
        } else {
            continue
        } 
    }//for
    return b;
}//function prueba
class Administrador {
    constructor(usuario, password) {
      this.usuario = usuario;
      this.password = password;
	}
}//class administrador

class UI {
    resetForm() {
      document.getElementById("loginAdmin").reset();
    }

	showMesage(message, cssClass) {
		const div = document.createElement("div");
		div.className = `alert alert-${cssClass} mt-2`;
		div.appendChild(document.createTextNode(message));
		//muestra en el DOM
		const container = document.querySelector(".container");
		const app = document.querySelector("#App");
		container.insertBefore(div, app);
		//metodo y funcion de temporizador para elminar la alerta 
		setTimeout(function(){
			document.querySelector('.alert').remove();
		},2300);
	}
}//class UI

function validateUsuario (usuario)  {
	return usuario.match(/^[a-zA-Z ]+$/);
  };//Valida usuario

function validatePass (password)  {
	return password.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%&*]{6,}$/);
  };//valida contraseña y pide que sea mayor que 5, tenga al menos un dígito, un caracter especial.

const crearAdmin = document.getElementById("loginAdmin");
crearAdmin.addEventListener("submit", function (event) {
	const usuario = document.getElementById("usuario").value;
	const password = document.getElementById("password").value;

	let a = {usuario:usuario,password:password}; //Creación de JSON
  	let a_user=JSON.stringify(a);
  	localStorage.setItem("Info",a_user); //Se agrega a localStorage

  if(validateUsuario(usuario)){
    alert("Usuario válido");
  } else{
    alert("Usuario no válido");
  }
  if(validatePass(password)){
    alert("Contraseña válida");
  } else{
    alert("Contraseña incorrecta");
  }

  const administrador = new Administrador(usuario, password);
  console.log(usuario, password);
  console.log(Administrador);

  const ui = new UI();
  //condicion para la validacion de datos
  if(usuario === '' || password === ''){
    return ui.showMesage('Campos incompletos, favor de llenarlos', 'warning');
  }//termina funcion de validacion 

});//función validateUser	

document
.getElementById("loginAdmin")
.addEventListener("submit", function (event) {
  const ui = new UI();
  ui.successProduct(event.target);
});



// Example starter JavaScript for disabling form submissions if there are invalid fields
	/*(function() {
	  'use strict';
	  window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
		  form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			  event.preventDefault();
			  event.stopPropagation();
			}
			form.classList.add('was-validated');
		  }, false);
		});
	  }, false);
	})();

/*const formulario = document.getElementById('loginAdmin');
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
});//formulario event listener*/