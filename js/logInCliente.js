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
};//valida contraseña y pide que sea mayor que 5, tenga al menos un dígito, un caracter especial.
function ValidaForm(correo,nombre,apellido,telefono,password,passwordConf){
  let contadorValidacion=0;
  if (validateEmail(correo.value)){
    contadorValidacion++;
    correo.classList.add('is-valid');
  }else{
    correo.classList.remove("is-valid");
    let validCorreo = document.getElementById("anclaValidacionCorreo");
    validCorreo.innerHTML = "Tu correo es inválido";
    correo.classList.add('is-invalid');
    setTimeout(()=>{
      validCorreo.innerHTML="";
      correo.value="";
      correo.classList.remove("is-invalid");
    }, 2300);
  };

  if (validateName(nombre.value)){
    contadorValidacion++;
    nombre.classList.add('is-valid');
  }else{
    nombre.classList.remove("is-valid");
    let validNombre = document.getElementById("anclaValidacionNombre");
    validNombre.innerHTML = "Por favor verifica este campo, recuerda que tu nombre no debe contener números";
    nombre.classList.add('is-invalid');
    setTimeout(()=>{
      validNombre.innerHTML="";
      nombre.value="";
      nombre.classList.remove("is-invalid");
    }, 2300);
  };

  if (validateLname(apellido.value)){
    contadorValidacion++;
    apellido.classList.add('is-valid');
  }else{
    apellido.classList.remove("is-valid");
    let validApellido = document.getElementById("anclaValidacionApellidos");
    validApellido.innerHTML = "Por favor verifica este campo, recuerda que tu apellido no debe contener números";
    apellido.classList.add('is-invalid');
    setTimeout(()=>{
      validApellido.innerHTML="";
      apellido.value="";
      apellido.classList.remove("is-invalid");
    }, 2300);
  };

  if (validateTel(telefono.value)){
    contadorValidacion++;
    telefono.classList.add('is-valid');
  }else{
    telefono.classList.remove("is-valid");
    let validTelefono = document.getElementById("anclaValidacionTelefono");
    validTelefono.innerHTML = "Número inválido";
    telefono.classList.add('is-invalid');
    setTimeout(()=>{
      validTelefono.innerHTML="";
      telefono.value="";
      telefono.classList.remove("is-invalid");
    }, 2300);
  };

  if (validatepass(password.value)){
    contadorValidacion++;
    password.classList.add('is-valid');
  }else{
    password.classList.remove("is-valid");
    let validPass = document.getElementById("anclaValidacionPassword");
    validPass.innerHTML = "Tu contraseña necesita mínimo 6 carácteres, un carácter especial, un número y una mayúscula";
    password.classList.add('is-invalid');
    setTimeout(()=>{
      validPass.innerHTML="";
      password.value="";
      password.classList.remove("is-invalid");
    }, 2300);
  };
  if (validatepass(passwordConf.value)){
    contadorValidacion++;
    passwordConf.classList.add('is-valid');
  }else{
    passwordConf.classList.remove("is-valid");
    let validPass1 = document.getElementById("anclaValidacionPassword2");
    validPass1.innerHTML = "Tu contraseña necesita mínimo 6 carácteres, un carácter especial, un número y una mayúscula";
    passwordConf.classList.add('is-invalid');
    setTimeout(()=>{
      validPass1.innerHTML="";
      passwordConf.value="";
      passwordConf.classList.remove("is-invalid");
    }, 2300);
  };
  return contadorValidacion;
};

//Registro de cliente
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
  
  if(ValidaForm(correo,nombre,apellido,telefono,password,passwordConf)==6 && password.value === passwordConf.value){
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
   }else if(password.value != passwordConf.value) { 
    passwordConf.classList.remove("is-valid");
    let validPass2 = document.getElementById("anclaValidacionPassword2");
    validPass2.innerHTML = "Contraseñas no coiniciden";
    passwordConf.classList.add('is-invalid');
    setTimeout(()=>{
      validPass2.innerHTML="";
      passwordConf.value="";
      passwordConf.classList.remove("is-invalid");
    }, 2300);
   }else if(password.value === passwordConf.value && contadorValidacion<5) { 
    passwordConf.classList.add('is-valid');
    Swal.fire({
      position: 'top-center',
      icon: 'error',
      title: '¡Error, en alguno de tus campos!',
      showConfirmButton: false,
      timer: 2300,
    });
   }else{
    Swal.fire({
      position: 'top-center',
      icon: 'error',
      title: '¡Error, en alguno de tus campos!',
      showConfirmButton: false,
      timer: 2300,
    });
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
console.log(usuarios);