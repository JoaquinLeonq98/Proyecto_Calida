function validateEmail (email)  {
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};//Validar email

function validateName (nam)  {
  return nam.match(/^[a-zA-Z ]+$/);
};//Valida nombre
  
function validateTel (tel)  {
  return tel.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
}; //Validar telefono

function validateMsg (mensaje){
  return mensaje.match(/^(?!\s*$)[-a-zA-Z0-9_:,.' ']{3,}$/);
};

//Obtiene el id de form
let formRespuesta = document.getElementById('resp');
//Valida los contenidos del form
function validacionForm(nombre, correo, telefono, mensaje) {
  let correoValor = correo.value;
  let nombreValor = nombre.value;
  let telefonoValor = telefono.value;
  let mensajeValor = mensaje.value;
  let contadorValidacion = 0;


  if (validateEmail(correoValor)){
    contadorValidacion++;
    correo.classList.add('is-valid');
  }else{
    let validEmail = document.getElementById("anclaValidaCorreo");
    validEmail.innerHTML = "Tu correo es inválido";
    correo.classList.add('is-invalid')

  };// if email

  if (validateName(nombreValor)){
    contadorValidacion++;
    nombre.classList.add('is-valid');
  }else{
    let validNombre = document.getElementById("anclaValidaNombre");
    validNombre.innerHTML = "Por favor verifica este campo, recuerda que tu nombre no debe contener números";
    nombre.classList.add('is-invalid')
  }//if nombre
  
  if (validateTel(telefonoValor)){
    contadorValidacion++;
    telefono.classList.add('is-valid');
  }else{
    let validTelefono = document.getElementById("anclaValidaTelefono");
    validTelefono.innerHTML = "Número inválido";
      telefono.classList.add('is-invalid');
  }//if tel

  if (validateMsg(mensajeValor)){
    contadorValidacion++;
    mensaje.classList.add('is-valid');
  }else{
    let validMsg = document.getElementById("anclaValidaMsg");
    validMsg.innerHTML = "Verifica el contenido de tu mensaje";
   mensaje.classList.add('is-invalid');
  }//if tel
 return contadorValidacion;
} //Termina función
//Hace el string para enviar al correo
function enviarinfo(nombre, correo, telefono, mensaje) {
  let correoValor = correo.value;
  let nombreValor = nombre.value;
  let telefonoValor = telefono.value;
  let mensajeValor = mensaje.value;
  let pp = `Hola, mi nombre es: ${nombreValor},mi correo y teléfono es: ${correoValor} y ${telefonoValor}. Te escribí el siguiente mensaje: "${mensajeValor}".`;
  return pp;
} //Termina función
//Traigo los valores del input
let nombre1 = document.getElementById('nombre');
let correo1 = document.getElementById('correo');
let mensaje1 = document.getElementById('mensaje');
let telefono1 = document.getElementById('telefono');
//Es un evento de enviar con alertas
formRespuesta.addEventListener('submit', (evento) => {
  evento.preventDefault();
  if (validacionForm(nombre1, correo1, telefono1, mensaje1) === 4) {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Se ha enviado correctamente',
      showConfirmButton: false,
      timer: 2300,
    });
    window.open(
      'mailto:joaquinleonquero00@gmail.com?subject=subject&body=' +
        String(enviarinfo(nombre1, correo1, telefono1, mensaje1))
    );
    formRespuesta.reset();
  }else {
    Swal.fire({
      position: 'top-center',
      icon: 'error',
      title: '¡Error, alguno de tu campos es incorrecto!',
      showConfirmButton: false,
      timer: 2300,
    });
  }
});
