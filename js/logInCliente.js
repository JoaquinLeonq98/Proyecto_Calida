function validateEmail (email)  {
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};//Validar email

function validateTel (tel)  {
  return tel.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
}; //Validar telefono
function validateName (nam)  {
  return nam.match(/^[a-zA-Z ]+$/);
};//Valida nombre

function validateLname (nam1)  {
  return nam1.match(/^[a-zA-Z ]+$/);
};//Valida apellido

function validatepass (pass)  {
  return pass.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%&*]{6,}$/);
};//valida contraseña y pide que sea mayor que 5, tenga al menos un dígito, un caracter especial.


let usuarios = [];
const crearUsuario = document.getElementById("crearCuenta");
crearUsuario.addEventListener("submit", function(e){
  
  let correo = document.getElementById("email2");
  let nombre = document.getElementById("name2");
  let apellido = document.getElementById("apellidos2");
  let telefono = document.getElementById("telefono");
  let password = document.getElementById("password2");
  let s = 0;
  
  if (validateEmail(correo.value)){
    s++;
    correo.classList.add('is-valid');
  }else{
    correo.classList.add('is-invalid')
  };

  if (validateName(nombre.value)){
    s++;
    nombre.classList.add('is-valid');
  }else{
    nombre.classList.add('is-invalid')
  }

  if (validateName(apellido.value)){
    s++;
    apellido.classList.add('is-valid');
  }else{
    apellido.classList.add('is-invalid')
  }

  if (validateTel(telefono.value)){
    s++;
    telefono.classList.add('is-valid');
  }else{
    telefono.classList.add('is-invalid')
  }

  if (validatepass(password.value)){
    s++;
    password.classList.add('is-valid');
  }else{
    let validPass = document.getElementById("anclaValidacionPassword");
    validPass.innerHTML = "Tu contraseña necesita mínimo 6 carácteres, un carácter especial, un número y una mayúscula";
    password.classList.add('is-invalid')
  }
  e.preventDefault() 
});

