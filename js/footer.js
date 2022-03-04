
 // contenidoFooter es una constante que almacena en acentos graves el HTML del footer global
 const contenidoFooter = `

 <!-- Footer -->
    <footer class="text-center text-lg-start text-muted contenido bajarFooter">
        <!-- Línea arriba -->
        <section
        class="d-flex justify-content-center mx-auto justify-content-lg-between p-4 contenido">

        </section>
        <!-- Termina Línea arriba -->
    
        <!-- Section: Links  -->
        <section class="contenido">
            <p class="linea-footer"></p>
        <div class="container text-center text-md-start mt-5 contenido">
            
            <div class="row mt-3 contenido"><!--Contenido-->

            <!-- Lado izq (logo) -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <!-- Content -->
                <img class="mb-4" src="../img/calida-logo-vf-color-transparent.png" alt="logo" height="100px">
                <p class="text-white">Tu tienda de plantas y macetas a precios accesibles</p>
                <a href="https://www.instagram.com/calidamx/" target="_blank"><img src="../img/iconmonstr-instagram-13.svg" alt="logo insta" height="35px"></a>
                <a href="https://www.facebook.com/CalidaMX/" class="ml-3" target="_blank"><img src="../img/iconmonstr-facebook-3.svg" alt="logo face" height="35px"></a>
            </div>
            <!-- lado izq (logo) -->
            
            <!-- Descubre -->
            <div class="col-md-2 col-lg-2 col-xl-2 mt-2">
                <!-- Links -->
                <h6 class="text-uppercase mb-4 titulo-footer">Descubre</h6>
                <p class="text-white"><a href="#!" target="_blank" class="text-reset">Lo nuevo</a></p>
                <p class="text-white"><a href="#!" target="_blank" class="text-reset">Lo más buscado</a></p>
                <p class="text-white"><a href="#!" target="_blank" class="text-reset">Lo más vendido</a></p>
            </div>
            <!-- Termina Descubre -->
    
            <!-- Acerca de -->
            <div class="col-md-3 col-lg-2 col-xl-2 mt-2">
                <!-- Links -->
                <h6 class="text-uppercase mb-4 titulo-footer">Acerca de</h6>
                <p class="text-white"><a href="#!" target="_blank" class="text-reset">Ayuda</a></p>
                <p class="text-white"><a href="#!" target="_blank" class="text-reset">Envíos</a></p>
                <p class="text-white"><a href="#!" target="_blank" class="text-reset">Cuenta</a></p>
            </div>
            <!-- Termina Acerca de -->
    
            <!-- Información -->
            <div class="col-md-4 col-lg-3 col-xl-3 mt-2">
                <!-- Links -->
                <h6 class="text-uppercase mb-4 titulo-footer">Información</h6>
                <p class="text-white"><a href="#!" target="_blank" class="text-reset">Contáctanos</a></p>
                <p class="text-white"><a href="#!" target="_blank" class="text-reset">Politicas de Privacidad</a></p>
                <p class="text-white"><a href="#!" target="_blank" class="text-reset">Términos y Condiciones</a></p>
            </div>
            <!-- Termina Información -->
            
            </div><!-- Contenido -->
        </div><!--Cpntainer-->
        </section>
        <!-- Section: Links  -->
    
        <!-- Copyright -->
        <div class="text-center p-4 bg-dark rights">
        © CÁLIDA All Rights Reserved
        </div>
    <!--Termina Footer-->

    </footer>
   
`;
window.addEventListener("load", function(){
    // A la constante "ancla" se le da ubicacion por medio del id="anclaFooter"
    const ancla = document.getElementById("anclaFooter");

    // Asigna el contenido de "contenidoFooter" y devuelve la sintaxis HTML con un "innerHTML" a la constante "anclaF"
    ancla.innerHTML= contenidoFooter;
});
