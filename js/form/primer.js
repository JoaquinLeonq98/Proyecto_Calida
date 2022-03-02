let formRespuesta = document.getElementById("resp");

function validacionForm(nombre,correo,telefono,mensaje){
    let correoValor = correo.value;
    let nombreValor = nombre.value;
    let telefonoValor = telefono.value;
    let mensajeValor = mensaje.value;
    let estado = true;

    
    if(correoValor === ""){
        correo.classList.add("is-invalid");
        let estado = false;
    }else{
        correo.classList.add("is-valid");
    }
    if(nombreValor === ""){
        nombre.classList.add("is-invalid");
        let estado = false;
    }else{
        nombre.classList.add("is-valid");
    }
    if(telefonoValor === ""){
        telefono.classList.add("is-invalid");
        let estado = false;
    }else{
        telefono.classList.add("is-valid");
    }
    if(mensajeValor === ""){
        mensaje.classList.add("is-invalid");
        let estado = false;
    }else{
        mensaje.classList.add("is-valid");
    }
    return estado;
}

if (validacionForm(nombre,correo,telefono,mensaje)){
    formRespuesta.addEventListener("submit",(evento)=>{
        evento.preventDefault();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se ha enviado correctamente',
            showConfirmButton: false,
            timer: 1500
          });
    })
}else{
    formRespuesta.addEventListener("submit",(evento)=>{
        evento.preventDefault();
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Checa tus campos',
            showConfirmButton: false,
            timer: 1500
          });
    })
}