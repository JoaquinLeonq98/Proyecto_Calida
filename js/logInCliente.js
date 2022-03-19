class Cliente {
    constructor(correo, name, apellidos, telefono, password) {
      this.correo = correo;
      this.name = name;
      this.apellidos = apellidos;
      this.telefono = telefono;
      this.password = password;
    }
  }//class Cliente

  class UI {
    resetForm() {
      document.getElementById("logInCliente").reset();
    }
  
    deleteCrearCuenta(element) {
      if (element.name === "delete") {
        element.parentElement.parentElement.parentElement.remove();
        this.showMesage('Producto elminado satisfactoriamente', 'danger')
      }
    }
  
    successCrearCuenta(element) {
      if (element.name === "add") {
        console.log(element.parentElement.parentElement.parentElement); // metodo pendiente para subir a base de datos
          
      }
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
  }
function validateEmail (email)  {
  return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

function validateTel (tel)  {
  return tel.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
};
  const crearCliente = document.getElementById("crearCuenta");
crearCliente.addEventListener("submit", function (event) {
  const correo = document.getElementById("correo2").value;
  const name = document.getElementById("name").value;
  const apellidos = document.getElementById("apellidos").value;
  const telefono = document.getElementById("telefono").value;
  const password = document.getElementById("password2").value;

  let a = {correo:correo,name:name,apellidos:apellidos,telefono:telefono,password:password}; //Creación de JSON
  let a_user=JSON.stringify(a);
  localStorage.setItem("Info",a_user); //Se agrega a localStorage

  if(validateEmail(correo)){
    alert("correo correcto");
  } else{
    alert("Correo no válido");
  }
  if(validateTel(telefono)){
    alert("telefono incorrecto");
  } else{
    alert("no valido");
  }

  console.log(correo, name, apellidos, telefono, password);

  const cliente = new Cliente(correo, name, apellidos, telefono, password);

  const ui = new UI();
  //condicion para la validacion de datos
  if(correo === '' || name === ''|| apellidos === '' || telefono === '' || password === ''){
    return ui.showMesage('Campos incompletos, favor de llenarlos', 'warning');
  }//termina funcion de validacion 

  
  ui.resetForm();
  ui.showMesage('producto añadido satisfactoriamente', 'success' );
  event.preventDefault();
});

document
  .getElementById("logInCliente")
  .addEventListener("submit", function (event) {
    const ui = new UI();
    ui.successProduct(event.target);
  });
