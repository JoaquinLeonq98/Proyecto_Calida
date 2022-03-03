let formRespuesta = document.getElementById("resp");

function validacionForm(nombre,correo,telefono,mensaje){
    let correoValor = correo.value;
    let nombreValor = nombre.value;
    let telefonoValor = telefono.value;
    let mensajeValor = mensaje.value;

    
    if(correoValor === "" ){
        correo.classList.add("is-invalid");
        return false;
    }else if(nombreValor===""){
        nombre.classList.add("is-invalid");
        return false;
    }else if(telefonoValor===""){
        telefono.classList.add("is-invalid");
        return false;
    }else if(mensajeValor===""){
        mensaje.classList.add("is-invalid");
        return false;
    }else{
        return true;
    }
}
let nombre1=document.getElementById("nombre");
let correo1=document.getElementById("correo");
let mensaje1 =document.getElementById("mensaje");
let telefono1= document.getElementById("telefono");

formRespuesta.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    if(validacionForm(nombre1,correo1,telefono1,mensaje1)===true){
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Se ha enviado correctamente',
            showConfirmButton: false,
            timer: 1500
          });
    }else{
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Checa tus campos',
            showConfirmButton: false,
            timer: 1500
          });
    }
})