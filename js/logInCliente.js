const logInCliente = document.getElementById('user1');
const inputs = document.querySelectorAll('#user1 input');

const expresiones ={
  correo2: /^[a-zA-Z0-9_.+-]+@[a-Za-Z0-9]+\.[a-zA-Z0-9.]+$/,
  nombre2: /^[a-zA-ZÁ-y\s]{1,40}$/, // permite letras, espacios y acentos
  apellido2: /^[a-zA-ZÁ-y\s]{1,40}$/, // permite letras, espacios y acentos
  tel2: /^\d{14}$/  //solo acepta 14 digitos
}//expresiones 

const validarUser1 = (e) =>{
  switch (e.target.nombre2){
    case "nombre2":
      
  }

}

inputs.forEach((input) =>{
  input.addEventListener('keyup', validarUser1);
  input.addEventListener('blur', validarUser1);
 
});
user1.addEventListener('submit',(e) =>{
  e.preventDefault();
});
