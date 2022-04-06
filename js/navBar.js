/**
 *  contenidoNavbar es una constante que almacena en acentos graves el HTML de la barra de navegacion global
 */
 let contenidoCarrito = "";
 let Rock = ""; 
 let carrito = localStorage.getItem('cart'); 
  
 let long = JSON.parse(carrito);
 console.log(long)

 if(long === null){
  Rock+=`<th scope="row" colspan="5"> Su carrito se encuentra vacío - comience a comprar!</th>`
 }else{
  let d =Object.values(long);
  console.log(d);
 
  let g= Object.values(long).length;
   
      
 
 
     for (let i=0;i<g;i++){
       contenidoCarrito+= `<tr>
       <td><img class="img-fluid img" src="../${d[i].image}"></td>
       <td>${d[i].name}</td>
       <td>${d[i].quanty}</td>
       <td>${d[i].total}</td>
     </tr>`
   }
 }
 
  



 



 const contenidoNavbar = `
 <nav class="navbar navbar-expand-lg navbar-light bg-light " style="background-color: #ffffff;">
     
        <div>
            <a href="./index.html"> <img class=" mb-3 img-fluid " src="../img/ramitaLogo.png" style="height:35px; margin-left: 0px; alt="logo"></a>
        </div> 
        </a> 
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
         </button>
         
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
             
                <ul class="navbar-nav m-auto text-center" id="colorLink">
    
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

             <form class="form-inline my-2 my-lg-0" id="navbarSupportedContent">
                <a class="" href="../pages/logInCliente.html" type="submit" target="_blank"
                ><i class="fa-solid fa-user" id="fasolid"></i></a>

                <!-- boton Modal -->
                <button type="button" class="btn btn-primary color-calida btnCartNav" data-toggle="modal" data-target="#staticBackdrop">
                carrito
              </button>
              
              <!-- Modal -->
              <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <div class="row">
              
                        <table class="table col-sm-12">
                          <thead>
                            <tr class =" col-sm-12">
                              <th scope="col">Imagen</th>
                              <th scope="col">Producto</th>
                              <th scope="col">Cantidad</th>
                              <th scope="col">Acción</th>
                              <th scope="col">Total</th>
                            </tr>
                          </thead>
                          <tbody id="items">
                            <tr>  
                                ${contenidoCarrito}
                            </tr>
                          </tbody>
                          <tfoot>
                            <tr id="footer">
                              ${Rock}
                            </tr>
                          </tfoot>
                        </table>
                        <template id="template-footer" class="col-sm-12">
                          <th scope="row" colspan="2">Total Productos</th>
                          <td>10</td>
                          <td>
                            <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                              vaciar carrito
                            </button>
                          </td>
                          <td class="font-weigth-bold">$ <span>5000</span></td>
                        </template>
                  
                        <template id="template-carrito" class="col-sm-12">
                          <tr>
                            <th scope="row"> <img  class="img-fluid img" src="" alt=""></th>
                            <td>Planta</td>
                            <td>1</td>
                            <td>
                              <button class="btn btn-info btn-sm">+</button>
                              <button class="btn btn-danger btn-sm">-</button>
                            </td>
                            <td>$<span>500</span></td>
                          </tr>
                        </template>
                       </div>
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                      <button type="button" class="btn btn-success">comprar</button>
                    </div>
                  </div>
                </div>
              </div>
              

             </form>
         </div>    
 </nav>
`;
// A la constante "ancla" se le da ubicacion por medio del id="anclaNavBar"
const ancla = document.getElementById("anclaNavBar");

// Asigna el contenido de "contenidoNavbar" y devuelve la sintaxis HTML con un "innerHTML" a la constante "ancla"
ancla.innerHTML = contenidoNavbar;


$(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

