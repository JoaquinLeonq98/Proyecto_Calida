let formRespuesta = document.getElementById('resp');

function validacionForm(nombre, correo, telefono, mensaje) {
  let correoValor = correo.value;
  let nombreValor = nombre.value;
  let telefonoValor = telefono.value;
  let mensajeValor = mensaje.value;
  let estado = true;

  if (correoValor === '') {
    correo.classList.add('is-invalid');
    let estado = false;
  } else {
    correo.classList.add('is-valid');
  }
  if (nombreValor === '') {
    nombre.classList.add('is-invalid');
    let estado = false;
  } else {
    nombre.classList.add('is-valid');
  }
  if (telefonoValor === '') {
    telefono.classList.add('is-invalid');
    let estado = false;
  } else {
    telefono.classList.add('is-valid');
  }
  if (mensajeValor === '') {
    mensaje.classList.add('is-invalid');
    let estado = false;
  } else {
    mensaje.classList.add('is-valid');
  }
  return estado;
}

let nombre1 = document.getElementById('nombre');
let correo1 = document.getElementById('correo');
let telefono1 = document.getElementById('telefono');
let mensaje1 = document.getElementById('mensaje');

if (validacionForm(nombre1, correo1, telefono1, mensaje1) === true) {
  formRespuesta.addEventListener('submit', (evento) => {
    evento.preventDefault();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Se ha enviado correctamente',
      showConfirmButton: false,
      timer: 1500,
    });
  });
} else {
  formRespuesta.addEventListener('submit', (evento) => {
    evento.preventDefault();
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Checa tus campos',
      showConfirmButton: false,
      timer: 1500,
    });
  });
}
