const items = document.getElementById("list-items");
const itemsCart = document.getElementById("items")
const footer = document.getElementById("footer");
const templateCard = document.getElementById("card").content; // obtiene todo el contenido de la card
const templateFooter = document.getElementById("template-footer").content;
const templateCart = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
let cart = {};


// evento que se ejecuta una vez terminado de cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
  if (localStorage.getItem('cart')){
    cart = JSON.parse(localStorage.getItem('cart'))
    printCart();
  }
});

items.addEventListener("click", (e) => {
  addCart(e);
});

itemsCart.addEventListener('click', e => {
  btnAction(e)
})
// funcion que se encarga de la promesa ASYNC y toma los datos de la API JSON
//tambien ejecuta la funcion printCards
const fetchData = async () => {
  try {
    const res = await fetch("productosApi.json");
    const data = await res.json();
    // console.log(data);
    printCards(data);
  } catch (error) {
    console.log(error);
  }
};

// Funcion que se encarga de iterar todos los objetos dentro del JSON, clona el contenido y coloca sus valores en el
const printCards = (data) => {
  data.forEach((Product) => {
    templateCard.querySelector("h5").textContent = Product.name;
    templateCard.querySelector("p").textContent = Product.description;
    templateCard.querySelector("h8").textContent = Product.price;
    templateCard.querySelector("img").setAttribute("src", Product.image);
    templateCard.querySelector(".btn-outline-dark").dataset.id = Product.id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
};

const addCart = (e) => {
  // console.log(e.target)
  // console.log(e.target.classList.contains('btn-outline-dark'))
  if (e.target.classList.contains("btn-outline-dark")) {
    setCart(e.target.parentElement.parentElement.parentElement);
  
  }
  e.stopPropagation(); //Sirve para detener eventos que se nos pueden generar en las cards de los productos
};

const setCart = (Object) => {
  // console.log(Object)
  const Product = {
    id: Object.querySelector(".btn-outline-dark").dataset.id,
    name: Object.querySelector("h5").textContent,
    price: Object.querySelector("h8").textContent,
    image: Object.querySelector("img").src.slice(22),
    quanty: 1,
    
  };

  if (cart.hasOwnProperty(Product.id)) {
    Product.quanty = cart[Product.id].quanty + 1;

  }

  cart[Product.id] = { ...Product };
  printCart()
};


const printCart = () => {
  // console.log(cart)
  itemsCart.innerHTML = '';
  Object.values(cart).forEach(product =>{
    templateCart.querySelector('img').setAttribute("src","../" + product.image);
    templateCart.querySelectorAll('td')[0].textContent = product.name;
    templateCart.querySelectorAll('td')[1].textContent = product.quanty;
    templateCart.querySelector('.btn-info').dataset.id = product.id;
    templateCart.querySelector('.btn-danger').dataset.id = product.id;
    templateCart.querySelector('span').textContent = product.quanty * product.price;

    const clone = templateCart.cloneNode(true)
    fragment.appendChild(clone);
  })

  itemsCart.appendChild(fragment)

  printFooter()

  localStorage.setItem('cart',JSON.stringify(cart))
}

const printFooter = () =>{
  footer.innerHTML = ''
  if(Object.keys(cart).length === 0 ){
    footer.innerHTML = `<th scope="row" colspan="5"> Su carrito se encuentra vacío - comience a comprar!</th>
    `
    return;
  }
  const nQuanty = Object.values(cart).reduce((i,{quanty}) => i + quanty, 0)
  const nPrice = Object.values(cart).reduce((i, {quanty,price}) => i + quanty * price, 0 )

  templateFooter.querySelectorAll('td')[0].textContent = nQuanty;
  templateFooter.querySelector('span').textContent = nPrice;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);

  footer.appendChild(fragment)

  const btnEmpity = document.getElementById("vaciar-carrito")
  if(btnEmpity === null){
  }else if(btnEmpity === ""){

  }
  else{
    btnEmpity.addEventListener('click', () =>{
      cart = {}
      printCart()
    })
  }
 
}

//funcion para botones y sumar canitidad de productos o eliminarlos
const btnAction = e => {
  if(e.target.classList.contains('btn-info')){
      const product = cart[e.target.dataset.id]
      product.quanty++
      cart[e.target.dataset.id] = {...product}
      printCart();
  }

  if(e.target.classList.contains('btn-danger')){
    const product = cart[e.target.dataset.id]
    product.quanty--
    if(product.quanty === 0 ){
      delete cart[e.target.dataset.id]
    }
    
      printCart();
  }
  e.stopPropagation()
} 

//Función para agregar card de producto desde admin
let productoStorage = localStorage.getItem("Info");
console.log(productoStorage);
let arrayProducto = JSON.parse(productoStorage);
console.table(arrayProducto);
productoStorage.push(cart);
//addItem(arrayProducto);