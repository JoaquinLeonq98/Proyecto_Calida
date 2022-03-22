//Obtiene el id de form
let formRespuesta = document.getElementById('resp');
//Valida los contenidos del form
function validacionForm(nombre, correo, telefono, mensaje) {
  let correoValor = correo.value;
  let nombreValor = nombre.value;
  let telefonoValor = telefono.value;
  let mensajeValor = mensaje.value;

  if (correoValor === '') {
    correo.classList.add('is-invalid');
    return false;
  } else if (nombreValor === '') {
    nombre.classList.add('is-invalid');
    return false;
  } else if (telefonoValor === '') {
    telefono.classList.add('is-invalid');
    return false;
  } else if (mensajeValor === '') {
    mensaje.classList.add('is-invalid');
    return false;
  } else {
    return true;
  }
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
  if (validacionForm(nombre1, correo1, telefono1, mensaje1) === true) {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Se ha enviado correctamente',
      showConfirmButton: false,
      timer: 2300,
    });
    /*window.open(
      'mailto:joaquinleonquero00@gmail.com?subject=subject&body=' +
        String(enviarinfo(nombre1, correo1, telefono1, mensaje1))
    );*/
    Email.send({
      SecureToken : "52e8d6a4-e3b2-460b-8950-dc6d49bf76a2",
      To : 'aurelior997@gmail.com',
      From : `${correo1.value}`,
      Subject : "Mensaje de contacto",
      Body : `${mensaje1.value}`
  }).then(
    message => alert(message));
    setTimeout(function () {
      document.getElementById('resp').reset();
    }, 2300);
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
