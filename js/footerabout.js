// contenidoFooter es una constante que almacena en acentos graves el HTML del footer global
const contenidoFooter2 = `

<!-- Footer -->
   <footer class="text-center text-lg-start text-muted contenido bajarFooter">
       <!-- Línea arriba -->
       <section
       class="d-flex justify-content-center mx-auto justify-content-lg-between p-4 contenido">

       </section>
       <!-- Termina Línea arriba -->
   
       <!-- Section: Links  -->
       <section class="contenidof">
           <p class="linea-footer"></p>
       <div class="container text-center text-md-start mt-5 contenidof">
           
           <div class="row mt-3 contenidof"><!--Contenido-->

           <!-- Lado izq (logo) -->
           <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
               <!-- Content -->
               <img class="mb-4" src="../img/labCodelogo(1).png" alt="logo" height="100px">
               <p class="text-white">Programando y creando hacia el futuro</p>
               
           </div>
           <!-- lado izq (logo) -->
           
           </div><!-- Contenido -->
       </div><!--Container-->
       </section>
       <!-- Section: Links  -->
   
       <!-- Copyright -->
       <div class="text-center p-4 bg-dark rights">
       © CÁLIDA All Rights Reserved - <a  href="../pages/aboutUs.html" >Desarrollado por LabCode</a>
       </div>
   <!--Termina Footer-->

   </footer>
  
`;
window.addEventListener("load", function(){
   // A la constante "ancla" se le da ubicacion por medio del id="anclaFooter"
   const ancla = document.getElementById("anclaFooter2");

   // Asigna el contenido de "contenidoFooter" y devuelve la sintaxis HTML con un "innerHTML" a la constante "anclaF"
   ancla.innerHTML= contenidoFooter2;
});
