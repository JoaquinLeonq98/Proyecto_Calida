/**
 *  contenidoNavbar es una constante que almacena en acentos graves el HTML de la barra de navegacion global
 */
 const contenidoNavbar = `
 <nav class="navbar navbar-expand-lg navbar-light bg-light " style="background-color: #ffffff;">
     
        <div>
            <a href="./index.html"> <img class=" mb-3 img-fluid "src="../img/calidaLogo.png" alt="logo"></a>
        </div> 
        </a> 
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
         </button>
         
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
             
                <ul class="navbar-nav m-auto">
    
                    <li class="nav-item">
                        <a class=" ml-5 hexCalida" href="../pages/aboutUs.html">Nosotros</a>
                    </li>

                    <li class="nav-item">
                        <a class=" ml-5 hexCalida" href="../pages/tienda.html">Tienda</a>
                    </li>
    
                    <li class="nav-item">
                        <a class=" ml-5 hexCalida" href="../pages/form.html">Contáctanos</a>
                    </li>
    
                    <li class="nav-item">
                        <a class=" ml-5 hexCalida" href="../pages/blog.html">Blog</a>
                    </li>
     
                </ul>

             <form class="form-inline my-2 my-lg-0">
                <a class="" href="../pages/prox.html" type="submit" target="_blank"
                ><i class="fa-solid fa-user" ></i></a>

                <a class="ml-4 spaceIcon" href="../pages/prox.html" type="submit" target="_blank" 
                ><i class="fa-solid fa-cart-shopping"></i></a>

             </form>
         </div>    
 </nav>
`;
// A la constante "ancla" se le da ubicacion por medio del id="anclaNavBar"
const ancla = document.getElementById("anclaNavBar");

// Asigna el contenido de "contenidoNavbar" y devuelve la sintaxis HTML con un "innerHTML" a la constante "ancla"
ancla.innerHTML = contenidoNavbar;