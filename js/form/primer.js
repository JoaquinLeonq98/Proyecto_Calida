//let ancla = document.getElementById("hdsn");

function validacionForm(nombre,correo,telefono,mensaje){
    let correoValor = correo.value;
    let nombreValor = nombre.value;
    let telefonoValor = telefono.value;
    let mensajeValor = mensaje.value;

    
    if(correoValor === "" || nombreValor === "" || telefonoValor===""||mensajeValor===""){
        
        nombre.classList.add("is-invalid");

        precio.classList.add("is-invalid");

        

    }else{

        nombre.classList.add("is-valid");
        precio.classList.add("is-valid");

        console.log(nombreValor);
        console.log(precioValor);
    }
}