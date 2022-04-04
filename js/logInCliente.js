function validateEmail (email)  {
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};//Validar email

function validateTel (tel)  {
  return tel.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
}; //Validar telefono
function validateName (nam)  {
  return nam.match(/^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/);
};//Valida nombre

function validateLname (nam1)  {
  return nam1.match(/^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/);
};//Valida apellido


function validatepass (pass)  {
  return pass.match(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%&*]{6,}$/);
};

function capitalize(str) {
  if(str.length == 0) return str;
  return str[0].toUpperCase() + str.substr(1);
}

function titleCase(str) {
  return str.split(' ').map(capitalize).join(' ');
}

let correo = document.getElementById("email2");
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
    correo.classList.remove("is-valid");
    correo.classList.add('is-invalid');
  }
});
let nombre = document.getElementById("name2");
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

let apellido = document.getElementById("apellidos2");
apellido.addEventListener("keyup", function(e){
  e.preventDefault();
  let f="";
  f += titleCase(apellido.value);
  apellido.value = f;
  if (validateName(f)){
    apellido.classList.remove("is-invalid");
    apellido.classList.add('is-valid');
  }else if(f===""){
    apellido.classList.remove("is-invalid");
    apellido.classList.remove("is-valid");
  }else{
    apellido.classList.remove("is-valid");
    apellido.classList.add('is-invalid');
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
let password = document.getElementById("password2");
password.addEventListener("keyup", function(e){
  e.preventDefault();
  let f="";
  f += String(password.value);
  if (validatepass(f)){
    password.classList.remove("is-invalid");
    password.classList.add('is-valid');
  }else if(f===""){
    password.classList.remove("is-invalid");
    password.classList.remove("is-valid");
  }else{
    password.classList.remove("is-valid");
    password.classList.add('is-invalid');
  }
});
let passwordConf = document.getElementById("password3");
passwordConf.addEventListener("keyup", function(e){
  e.preventDefault();
  let f="";
  f += String(password.value);
  if (validatepass(f) && password.value===passwordConf.value){
    passwordConf.classList.remove("is-invalid");
    passwordConf.classList.add('is-valid');
  }else if(f===""){
    passwordConf.classList.remove("is-invalid");
    passwordConf.classList.remove("is-valid");
  }else{
    passwordConf.classList.remove("is-valid");
    passwordConf.classList.add('is-invalid');
  }
});

let usuarios = [];
let crearUsuario = document.getElementById("crearCuenta");
crearUsuario.addEventListener("submit", function(e){
  e.preventDefault();
  let correo = document.getElementById("email2");
  let nombre = document.getElementById("name2");
  let apellido = document.getElementById("apellidos2");
  let telefono = document.getElementById("telefono");
  let password = document.getElementById("password2");
  let passwordConf = document.getElementById("password3");
  let contador = 0 ;

  if(validateEmail(correo.value)){
    contador++;
  };
  if(validateName(nombre.value)){
    contador++;
  };
  if(validateLname(apellido.value)){
    contador++;
  };
  if(validateTel(telefono.value)){
    contador++;
  };
  if(validatepass(password.value)){
    contador++;
  };
  if(validatepass(passwordConf.value) && password.value===passwordConf.value){
    contador++;
  };
  
  if(contador===6){
     let a = {correo:correo.value,nombre:nombre.value,apellido:apellido.value,telefono:telefono.value,password:password.value};     
     usuarios.push(a);
     let jsonUsuarios = JSON.stringify(usuarios); // convertir la nueva array a json
     localStorage.setItem("usuarios", jsonUsuarios); // Regresarlo al local storage
     Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: '¡Te has registrado exitosamente!',
      showConfirmButton: false,
      timer: 2300,
    });
    setTimeout(()=>{
      correo.classList.remove("is-valid");
      nombre.classList.remove("is-valid");
      apellido.classList.remove("is-valid");
      telefono.classList.remove("is-valid");
      password.classList.remove("is-valid");
      passwordConf.classList.remove("is-valid");
      crearUsuario.reset();
    }, 2800);
    contador=0;
   }else{
    Swal.fire({
      position: 'top-center',
      icon: 'error',
      title: '¡Error, en alguno de tus campos!',
      showConfirmButton: false,
      timer: 2300,
    });
    contador=0;
  }
});
//Termina registro de cliente

//Log In de clientes

function prueba (usuario, contra){
  let b=false; //se declara una variable b falso
  let usuarioStorage = localStorage.getItem("usuarios"); //poner la key para obtener ese item desde la local storage
  let arrayUsuario = JSON.parse(usuarioStorage); //parsearlo a que sea legible para JS

  for (let i=0; i<arrayUsuario.length; i++){
      
    if (arrayUsuario[i].correo===usuario){
          if (arrayUsuario[i].password===contra){ //se comparan los usuarios y contraseñas para ver si coinciden
              let b = true; //si coinciden, b ahora es true
              return b;
              break //se rompe el ciclo si se valida el usuario y contraseña (true)
          } else {
              break //si la contraseña es incorrecta, se rompe el ciclo
          }
      } else {
          continue //de otra manera, continúa el ciclo
      } 
  }//for
  return b;
}



const ingresoCliente = document.getElementById("anclaLogIn"); //se trae el formulario 
ingresoCliente.addEventListener("submit", function (event) {
	event.preventDefault(); //
	const usuario1 = document.getElementById("correo").value;
	const password = document.getElementById("password").value;

	if (prueba(usuario1,password)){
		window.location.assign("./tienda.html");
	}else{
		Swal.fire({
			position: 'top-center',
			icon: 'error',
			title: 'Tu usuario o contraseña es inválido',
			showConfirmButton: false,
			timer: 2300,
		}); //alerta en caso de campos incorrectos
	}
});//función validateUser

//Termina LogIn clientes