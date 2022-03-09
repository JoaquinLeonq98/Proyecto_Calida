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
    'img': '../img/productos/calidamx-p1.jpg' ,
    'price': '$190',
    'description':'Son plantas super fáciles de cuidar siempre y cuando pongas mucha atención a los riegos. Lo ideal es regarla con la frecuencia suficiente para que tenga la tierra siempre un poco húmeda. 🌿💦'});

    addItem({'name':'Espada mini ',
    'img': '../img/productos/calidamx-p2.jpg' ,
    'price': '$445',
    'description':'La mejor aliada para espacios pequeños y poco iluminados ✨🌿 Con taza chica, plato grande y base alta.'});

    addItem({'name':'Calathea burle marx ',
    'img': '../img/productos/calidamx-p3.jpg' ,
    'price': '$110',
    'description':'🌿 Para mantener bonita y sana a tu calathea sólo necesitas regarla dos veces a la semana y una habitación bien iluminada sin rayos de sol directos. ✨💚'});

    addItem({'name':'Amoena dieffenbachia ',
    'img': '../img/productos/calidamx-p4.jpg' ,
    'price': '$110',
    'description':'🍃¿Sabías que la amoena también es conocida como Lotería? 🍃Llena tu casa de suerte 💫'});

    addItem({'name':'Aglaonemas verde ',
    'img': '../img/productos/calidamx-p5.jpg' ,
    'price': '$280',
    'description':'Si necesitas una plantita resistente, las aglaonemas son la respuesta 💚 Riega una vez a la semana🌊 y ponla cerquita de la ventana☀️ pero también se adapta muy bien a semisombra.👌'});

    addItem({'name':'Monsteras deliciosa ',
    'img': '../img/productos/calidamx-p6.jpg' ,
    'price': '$160',
    'description':'🌿 ¿Sabías que cuando las monsteras deliciosas son jovenes no tienen agujeros en sus hojas? Estos agujeros se llaman “fenestraciones” y comienzan a salir para dejar pasar luz a las hojas previas cuando la planta alcanza la madurez. ✨'});

    addItem({'name':'Plantita bonita ',
    'img': '../img/productos/calidamx-p7.jpg' ,
    'price': '$160',
    'description':'🌿  ✨'});

    addItem({'name':'Calathea makoyana ',
    'img': '../img/productos/calidamx-p8.jpg' ,
    'price': '$110',
    'description':'¿Sabías que a la calathea makoyana también la conocen como “planta pavo real”? 🦚 Te ayudará a crear ambientes húmedos para tus demás  plantitas 🌿 y es ideal si tienes 🐶🐱 porque es petfriendly.⚡'});

    addItem({'name':'Plantita bonita 2',
    'img': '../img/productos/calidamx-p9.jpg' ,
    'price': '$100',
    'description':'plantita'});

    addItem({'name':'Rosario, Hoja de sandia y Espada mini ',
    'img': '../img/productos/calidamx-p10.jpg' ,
    'price': '$190',
    'description':'¿Buscas plantas pequeñas para tu escritorio? ✍️ 🌿¡Estas tres son perfectas para ti! ya que crecen muy lento y no tendrás que cambiarlas demaceta en mucho mucho tiempo. ✨💓'});
