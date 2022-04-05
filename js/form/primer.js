function validateEmail (email)  {
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};//Validar email

function validateName (nam)  {
  return nam.match(/^[ÁÉÍÓÚÑA-Z][a-záéíóúñ]+(\s+[ÁÉÍÓÚÑA-Z]?[a-záéíóúñ]+)*$/);
};//Valida nombre
  
function validateTel (tel)  {
  return tel.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
}; //Validar telefono

function validateMsg (mensaje){
  return mensaje.match(/^(?!\s*$)[-a-zA-Z0-9_:,.' ']{3,}$/);
};

function capitalize(str) {
  if(str.length == 0) return str;
  return str[0].toUpperCase() + str.substr(1);
}

function titleCase(str) {
  return str.split(' ').map(capitalize).join(' ');
}
//Obtiene el id de form
let formRespuesta = document.getElementById('resp');
//Valida los contenidos del form
//Termina función
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

let correo = document.getElementById("correo");
correo.addEventListener("keyup", function(e){
  e.preventDefault();
  let d="";
  d += correo.value;
  if (validateEmail(d)){
    correo.classList.remove("is-invalid");
    correo.classList.add('is-valid');
  }else if(d===''){
    correo.classList.remove("is-invalid");
    correo.classList.remove("is-valid");
  }else{
    correo.classList.add('is-invalid');
  }
});
let nombre = document.getElementById("nombre");
nombre.addEventListener("keyup", function(e){
  e.preventDefault();
  let f="";
  f += titleCase(nombre.value);
  nombre.value = f;
  if (validateName(f)){
    nombre.classList.remove("is-invalid");
    nombre.classList.add('is-valid');
  }else if(f===""){
    nombre.classList.remove("is-invalid");
    nombre.classList.remove("is-valid");
  }else{
    nombre.classList.remove("is-valid");
    nombre.classList.add('is-invalid');
  }
});

let telefono = document.getElementById("telefono");
telefono.addEventListener("keyup", function(e){
  e.preventDefault();
  let f="";
  f += String(telefono.value);
  if (validateTel(f)){
    telefono.classList.remove("is-invalid");
    telefono.classList.add('is-valid');
  }else if(f===""){
    telefono.classList.remove("is-invalid");
    telefono.classList.remove("is-valid");
  }else{
    telefono.classList.remove("is-valid");
    telefono.classList.add('is-invalid');
  }
});

let mensaje = document.getElementById("mensaje");
mensaje.addEventListener("keyup", function(e){
  e.preventDefault();
  let f="";
  f += String(mensaje.value);
  if (validateMsg(f)){
    mensaje.classList.remove("is-invalid");
    mensaje.classList.add('is-valid');
  }else if(f===""){
    mensaje.classList.remove("is-invalid");
    mensaje.classList.remove("is-valid");
  }else{
    mensaje.classList.remove("is-valid");
    mensaje.classList.add('is-invalid');
  }
});

//Es un evento de enviar con alertas
formRespuesta.addEventListener('submit', (evento) => {
  evento.preventDefault();
  let correo = document.getElementById("correo");
  let nombre =document.getElementById("nombre");
  let telefono = document.getElementById("telefono");
  let mensaje= document.getElementById("mensaje");
  let contador = 0;
  if(validateEmail(correo.value)){
    contador++;
  };
  if(validateName(nombre.value)){
    contador++;
  };
  if(validateTel(telefono.value)){
    contador++;
  };
  if(validateName(mensaje.value)){
    contador++;
  };
  if (contador === 4 ) {
    Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: 'Se ha enviado correctamente',
      showConfirmButton: false,
      timer: 2300,
    });
    window.open(
      'mailto:joaquinleonquero00@gmail.com?subject=subject&body=' +
        String(enviarinfo(nombre, correo, telefono, mensaje))
    );
    formRespuesta.reset();
  }else{
    Swal.fire({
      position: 'top-center',
      icon: 'error',
      title: '¡Error, alguno de tu campos es incorrecto!',
      showConfirmButton: false,
      timer: 2300,
    });
  }
});
