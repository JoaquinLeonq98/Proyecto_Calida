function addItem(item){
    const itemHTML = 
'<div class="row-lg-4  m-2 d-flex align-items-stretch"">'+
'<div class="card">'+
'<img src="'+item.img +'" class="card-img-top mx-auto" style="width: 18rem" alt="...">' +
'<div class="card-body">'+   
  '<h5 class="card-title">'+item.name +'</h5>'+
  '<p class="card-text">'+item.price +'</p>'+
  '<p class="card-text" style="width: 18rem">'+item.description +'</p>'+
'</div>'+
'<div class="card-footer">'+
 '<div class="text-center"><a href="#" class="btn btn-primary">Agregar al carrito</a>\n </div>'+
'</div>'+
'</div>'+
'</div>';

    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}