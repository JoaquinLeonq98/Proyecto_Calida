const templateFooter = document.getElementById("template-footer").content;
const templateCart = document.getElementById("template-carrito").content;
const footer = document.getElementById("footer");
const fragment = document.createDocumentFragment();
const itemsCart = document.getElementById("items")

let cart = {}
let cart1 = []


cart = JSON.parse(localStorage.getItem('cart'))

console.log(Object.values(cart))




// document.addEventListener("DOMContentLoaded", () => {
//     if (localStorage.getItem('cart')){
//       cart = JSON.parse(localStorage.getItem('cart'))
//       printCart();
//     }
//   });

//   itemsCart.addEventListener('click', e => {
//     btnAction(e)
//   })
// const printCart = () => {
//     // console.log(cart)
//     itemsCart.innerHTML = '';
//     Object.values(cart).forEach(product =>{
//       templateCart.querySelector('img').setAttribute("src","../" + product.image);
//       templateCart.querySelectorAll('td')[0].textContent = product.name;
//       templateCart.querySelectorAll('td')[1].textContent = product.quanty;
//       templateCart.querySelector('.btn-info').dataset.id = product.id;
//       templateCart.querySelector('.btn-danger').dataset.id = product.id;
//       templateCart.querySelector('span').textContent = product.quanty * product.price;
  
//       const clone = templateCart.cloneNode(true)
//       fragment.appendChild(clone);
//     })
// }




// //funcion para botones y sumar canitidad de productos o eliminarlos
// const btnAction = e => {
//   if(e.target.classList.contains('btn-info')){
//       const product = cart[e.target.dataset.id]
//       product.quanty++
//       cart[e.target.dataset.id] = {...product}
//       printCart();
//   }

//   if(e.target.classList.contains('btn-danger')){
//     const product = cart[e.target.dataset.id]
//     product.quanty--
//     if(product.quanty === 0 ){
//       delete cart[e.target.dataset.id]
//     }
    
//       printCart();
//   }
//   e.stopPropagation()
// } 