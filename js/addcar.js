const ClickButton = document.querySelectorAll(".btn");
const itemsContainer = document.getElementById("list-items");
let car = [];


ClickButton.forEach(btn =>{
    btn.addEventListener('click', addItem)
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

    const InputElement = itemsContainer.getElementsByClassName('input__element') // agregar clase a la etiqueta donde se enceuntra la cantidad
    //for para validar si un producto esta repetido y sumar la cantidad
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
        const Content = ``// contenido de la tabla para carriro 
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