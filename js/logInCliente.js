const logInCliente = document.getElementById('logInCliente');
const inputs = document.querySelectorAll('#logInCliente input');

const expresiones ={
  correo: /^[a-zA-Z0-9_.+-]+@[a-Za-Z0-9]+\.[a-zA-Z0-9.]+$/,
  nombre: /^[a-zA-ZÁ-y\s]{1,40}$/, // permite letras, espacios y acentos
  apellidos: /^[a-zA-ZÁ-y\s]{1,40}$/, // permite letras, espacios y acentos
  telefono: /^\d{14}$/  //solo acepta 14 digitos
}//expresiones 

const campos = {
  correo: false,
  nombre: false,
  apellidos: false,
  telefono: false,
}//const campos

const validarlogInCliente = (e) =>{
  switch(e.target.name){
    case "correo":
      validarCampo(expresiones.correo, e.target, "correo");
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