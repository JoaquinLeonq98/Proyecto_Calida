//let ancla = document.getElementById("hdsn");

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

formRespuesta.addEventListener("submit",(evento)=>{

    evento.preventDefault();
    validacionForm(correo,nombre,telefono,mensaje);
    let precioValor = precio.value;
    let nombreValor = nombre.value;
   let nuevaTarjeta= crearTarjeta(nombreValor,precioValor);
   ancla.innerHTML = nuevaTarjeta;
})