let clickButton = document.getElementById("btnTienda");
const itemsContainer = document.getElementById("list-items");
let car = [];


clickButton.addEventListener('click', btn =>{
  addItem()
})

function addItem(e){
    const button = e.target
    const item = button.closest('.card')
    const ItemTitle = item.querySelector('.card-title').textContent;
    const ItemPrice = item.querySelector('.price').textContent;
    const ItemImg = item.querySelector('.card img-top').src;

    const NewItem = {
        title: ItemTitle,
        price: ItemPrice,
        img: ItemImg,
        quanty: 1
    }
    addItemCar(NewItem)
    
}

function addItemCar(NewItem){
    // agregar clase a la etiqueta donde se encuentra la cantidad
    //for para validar si un producto esta repetido y sumar la cantidad
    const InputElement = itemsContainer.getElementsByClassName('table__quanty') 
   for(let i = 0; i < car.length; i ++){
       if(car[i].title.trim() === NewItem.title.trim()){
        car[i].quanty ++;
        const InputValue = InputElement[i];
        InputValue.value ++;
        return null;
       }
   }

    car.push(NewItem);
    renderCar()
 }

 //renderizar al Dom 
 function renderCar(){
    itemsContainer.innerHTML += itemHTML;
    car.map(item =>{
        const tr = document.createElement('tr')
        tr.classList.add('ItemCar')
        // contenido de la tabla para carriro 
        const Content = `  
        <table class="tablaCar">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td class="tablaProductos">
            <img class="#" src="../img/productos/Aglaonema roja1.jpg" alt="">
            <h6 class="tablaTitulo">Aglaonema Roja</h6>
            </td>
          <td class="tablaPrecio"><p>$ ${item.price}<</p></td>
          <td class="tablaCantidad">
            <input type="number" min="1" value="1">
            <button class="delete btn btn-success">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <br></br>
    <div class="row mx-4">
      <div class="col">
        <h3 class="itemCarTotal">Total: $ ${item.total}</h3>
      </div>
      <div class="col d-flex justify-content-end">
          <button class="btn btn-success">Comprar</button>
      </div>
      </div>
    </div>
        
        
        
        `
        tr.innerHTML = Content;
        itemsContainer.append(tr)
        tr.querySelector(".delete").addEventListener('click',removeItemCar)
        tr.querySelector(".input__element").addEventListener('chnge', sumaQuanty)
    })
    carTotal()

 }

//funcion para sumar y dar el total del carrito 
 function carTotal(){
     let total = 0;
     const ItemCarTotal = document.querySelector('itemCartTotal')
     car.forEach((item)=>{
         const precio = Number(item.price.replace("$",''))
         total = total + precio * item.quanty
     })
     ItemCarTotal.innerHTML = `Total $${total}`
     addLocalStorage()
 }


 function removeItemCar(e){
    const buttonDelete = e.target 
    const tr = buttonDelete.closest(".ItemCar") 
    const title = tr.querySelector('.title').textContent
    for (let i = 0; i < car.length; i++) {
       if (car[i].title.trim ()=== title.trim()){
           car.splice(i, 1)
       }
        
    }
    tr.remove();
    carTotal()
 }
//suma de cantidad de productos
 function sumaQuanty(e){
     const sumaInput = e.target 
     const tr = sumaInput.closest(".ItemCar")
     const title = tr.querySelector('.title').textContent
     car.forEach(item => {
         if(item.title.trim()=== title){
             sumaInput.value < 1 ? (sumaInput.value = 1): sumaInput.value;
             item.quanty = sumaInput.value;
             carTotal()
         }
     })
 }

//funcion de local storage a DOM 
function addLocalStorage(){
    localStorage.setItem('car', JSON.stringify(car));
}

//pasar al local storage
 window.onload = function(){
     const storage = JSON.parse(localStorage.getItem('car'));
    if(storage){
        car = storage;
        renderCar()
    } 
 }