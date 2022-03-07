/**
 *  contenidoNavbar es una constante que almacena en acentos graves el HTML de la barra de navegacion global
 */
 const contenidoNavbar = `
 <nav class="navbar navbar-expand-lg navbar-light bg-light " style="background-color: #ffffff;">
     
        <div>
            <img class=" mb-3 img-fluid "src="../img/calidaLogo.png" alt="logo">
        </div> 
        </a> 
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
         </button>
         
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
             
                <ul class="navbar-nav m-auto">
    
                    <li class="nav-item dropdown" id="menu">
                        <a class="nav-link dropdown-toggle ml-5" href="../pages/aboutUs.html" id="navbarDropdown" role="button" data-toggle="dropdown"  aria-expanded="false">
                            Nosotros
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="https://www.linkedin.com/in/calbertolb/">Carlos Alberto López Benítez</a>
                            <a class="dropdown-item" href="#">Joaquín León Quero</a>
                            <a class="dropdown-item" href="https://www.linkedin.com/in/aurelio-reyes-s%C3%A1nchez/">Aurelio Reyes Sanchez</a>
                            <a class="dropdown-item" href="https://www.linkedin.com/in/maría-fernanda-rivera-medina-77aaa522b/">Maria Fernanda Rivera Medina</a>
                            <a class="dropdown-item" href="https://www.linkedin.com/in/crismoute/">Cristian Mota Ramirez</a>
                            <a class="dropdown-item" href="#">Manuel Alberto De La Torre Piña</a>
                            <a class="dropdown-item" href="https://www.linkedin.com/in/naomi-quintero/">Naomi Quintero Flores</a>
                        </div>
                    </li>
    
                    <li class="nav-item">
                        <a class="nav-link ml-5" href="../pages/tienda.html">Tienda</a>
                    </li>
    
                    <li class="nav-item">
                        <a class="nav-link ml-5" href="../pages/form.html">Contáctenos</a>
                    </li>
    
                    <li class="nav-item">
                        <a class="nav-link ml-5" href="../pages/blog.html">Blog</a>
                    </li>
     
                </ul>

             <form class="form-inline my-2 my-lg-0">
                <a class="" href="#" type="submit" target="_blank"
                ><img src="../img/iconmonstr-user-7.svg" alt="icono usuario"/></a>

                <a class="ml-4 spaceIcon" href="#" type="submit" target="_blank" 
                ><img src="../img/iconmonstr-shopping-cart-2.svg" alt="icono carrito de compras"/></a>

             </form>
         </div>    
 </nav>
`;
// A la constante "ancla" se le da ubicacion por medio del id="anclaNavBar"
const ancla = document.getElementById("anclaNavBar");

// Asigna el contenido de "contenidoNavbar" y devuelve la sintaxis HTML con un "innerHTML" a la constante "ancla"
ancla.innerHTML = contenidoNavbar;