const logInCliente = document.getElementById('logInCliente');
const inputs = document.querySelectorAll('#logInCliente input');

const expresiones ={
  correo2: /^[a-zA-Z0-9_.+-]+@[a-Za-Z0-9]+\.[a-zA-Z0-9.]+$/,
  nombre: /^[a-zA-ZÁ-y\s]{1,40}$/, // permite letras, espacios y acentos
  apellidos: /^[a-zA-ZÁ-y\s]{1,40}$/, // permite letras, espacios y acentos
  telefono: /^\d{14}$/  //solo acepta 14 digitos
}//expresiones 

const campos = {
  correo2: false,
  nombre: false,
  apellidos: false,
  telefono: false,
}//const campos

const validarlogInCliente = (e) =>{
  switch(e.target.name){
    case "correo":
      validarCampo(expresiones.correo2, e.target, "correo");
      break;
      case "nombre":
        validarCampo(expresiones.nombre, e.target, "nombre");
      break;
      case "apellidos":
        validarCampo(expresiones.apellidos, e.target, "apellidos");
        break;
      case "telefono":
        validarCampo(expresiones.telefono, e.target,'telefono');
        break;
  }//switch
}//const validar

const validarCampo = (expresion, input, campo) =>{
  if(expresion.test(input.value)){
    document.getElementById(`grupo_${campo}`).classList.remove("logInCliente_grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.add("logInCliente__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle"); 
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
		document.querySelector(`#grupo__${campo} .logInCliente__input-error`).classList.remove("logInCliente__input-error-activo");
		campos[campo] = true;
  }else{
    document.getElementById(`grupo__${campo}`).classList.add("logInCliente__grupo-incorrecto");
		document.getElementById(`grupo__${campo}`).classList.remove("logInCliente__grupo-correcto");
		document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
		document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
		document.querySelector(`#grupo__${campo} .logInCliente__input-error`).classList.add("logInCliente__input-error-activo");
		campos[campo] = false;
  }//else
}//if

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById("password");
	const inputPassword2 = document.getElementById("password2");

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
		document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
		document.querySelector(`#grupo__password2 i`).classList.add("fa-times-circle");
		document.querySelector(`#grupo__password2 i`).classList.remove("fa-check-circle");
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
		campos["password"] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
		document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
		document.querySelector(`#grupo__password2 i`).classList.remove("fa-times-circle");
		document.querySelector(`#grupo__password2 i`).classList.add("fa-check-circle");
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
		campos["password"] = true;
	}