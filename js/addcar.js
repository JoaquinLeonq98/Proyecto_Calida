class Product{
  constructor (title, price, description,image) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.image = image;
  }
}

let Cart =  [];
let nombres ="" ;

for (let i = 1; i <= 10; i ++){


 const btn = document.getElementById("btnTienda" + i);addEventListener('click', event =>{
    const image = document.getElementById("image" + i).src
    const title = document.getElementById("title" + i).textContent
    const price = document.getElementById("price" + i).textContent
    const description = document.getElementById("description" + i).textContent
    console.log(btn)
   
  })
}





