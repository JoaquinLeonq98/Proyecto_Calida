const a = [{usuario:'jleon', contra:'jleon12'}, {usuario:'cmota', contra:'cmota12'}, {usuario:'areyes', contra:'areyes12'},{usuario:'mpiña', contra:'mpiña12'}, {usuario:'nquintero', contra:'nquintero12'}, {usuario:'frivera', contra:'frivera12'},{usuario:'clopez', contra:'clopez12'}];
//se crea un array con los usuarios y contraseñas de los administradores
function prueba (usuario, contra){
    let b=false; //se declara una variable b falso
    for (let i=0; i<a.length; i++){
        if (a[i].usuario===usuario){
            if (a[i].contra===contra){ //se comparan los usuarios y contraseñas para ver si coinciden
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
}//function prueba

class UI {
    resetForm() {
      document.getElementById("loginAdmin").reset();
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
}//class UI

const crearAdmin = document.getElementById("loginAdmin"); //se trae el formulario 
crearAdmin.addEventListener("submit", function (event) {
	event.preventDefault(); //
	const usuario1 = document.getElementById("validationCustom01").value;
	const password = document.getElementById("validationCustom02").value;
	if (prueba(usuario1,password)){
		window.location.assign("./producto.html");
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

