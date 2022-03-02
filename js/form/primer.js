//let ancla = document.getElementById("hdsn");

function validacionForm(nombre,correo,telefono,mensaje){
    let correoValor = correo.value;
    let nombreValor = nombre.value;
    let telefonoValor = telefono.value;
    let mensajeValor = mensaje.value;

    
    if(correoValor === "" || nombreValor === "" || telefonoValor===""||mensajeValor===""){
        
        nombre.classList.add("is-invalid");
        correo.classList.add("is-invalid");
        

    }else{

        nombre.classList.add("is-valid");
        correo.classList.add("is-valid");

    }
}