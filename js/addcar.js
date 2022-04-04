const items = document.getElementById("list-items")
const templateCard = document.getElementById("card").content
const fragment = document.createDocumentFragment()


document.addEventListener('DOMContentLoaded',()=>{
  fetchData()
})


const fetchData = async() =>{
  try {
     const res = await fetch('productosApi.json')
     const data = await res.json()
     printCards(data)
  } catch (error) {
    console.log(error)
  }
}

const printCards  = data => {
 data.forEach(Product => {
  templateCard.querySelector('h5').textContent = Product.name
  templateCard.querySelector('p').textContent = Product.description
  templateCard.querySelector('h8').textContent = Product.price 
  templateCard.querySelector('img').setAttribute("src", Product.image)   
 console.log(Product)
  const clone = templateCard.cloneNode(true)
  fragment.appendChild(clone)
 });
 items.appendChild(fragment)
} 




