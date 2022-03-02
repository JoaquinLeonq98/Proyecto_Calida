//let ancla = document.getElementById("hdsn");

function validacionForm(nombre,correo,telefono,mensaje){
    let correoValor = correo.value;
    let nombreValor = nombre.value;
    let telefonoValor = telefono.value;
    let mensajeValor = mensaje.value;

    
    if(correoValor === ""){
        correo.classList.add("is-invalid");
    }else{
        correo.classList.add("is-valid");
    }
    if(nombreValor === ""){
        nombre.classList.add("is-invalid");
    }else{
        nombre.classList.add("is-valid");
    }
    if(telefonoValor === ""){
        telefono.classList.add("is-invalid");
    }else{
        telefono.classList.add("is-valid");
    }
    if(mensajeValor === ""){
        alert("Agrega un mensaje");
        mensaje.classList.add("is-invalid");
    }else{
        mensaje.classList.add("is-valid");
    }

}