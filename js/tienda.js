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

addItem({'name':'Cuna de Moisés ',
    'img': './img/calidamx-p1.jpg' ,
    'price': '$190',
    'description':'Son plantas super fáciles de cuidar siempre y cuando pongas mucha atención a los riegos. Lo ideal es regarla con la frecuencia suficiente para que tenga la tierra siempre un poco húmeda. 🌿💦'});

    addItem({'name':'Espada mini ',
    'img': './img/calidamx-p2.jpg' ,
    'price': '$445',
    'description':'La mejor aliada para espacios pequeños y poco iluminados ✨🌿 Con taza chica, plato grande y base alta.'});

    addItem({'name':'Calathea burle marx ',
    'img': './img/calidamx-p3.jpg' ,
    'price': '$110',
    'description':'🌿 Para mantener bonita y sana a tu calathea sólo necesitas regarla dos veces a la semana y una habitación bien iluminada sin rayos de sol directos. ✨💚'});

    addItem({'name':'Amoena dieffenbachia ',
    'img': './img/calidamx-p4.jpg' ,
    'price': '$110',
    'description':'🍃¿Sabías que la amoena también es conocida como Lotería? 🍃Llena tu casa de suerte 💫'});

    addItem({'name':'Aglaonemas verde ',
    'img': './img/calidamx-p5.jpg' ,
    'price': '$280',
    'description':'Si necesitas una plantita resistente, las aglaonemas son la respuesta 💚 Riega una vez a la semana🌊 y ponla cerquita de la ventana☀️ pero también se adapta muy bien a semisombra.👌'});
