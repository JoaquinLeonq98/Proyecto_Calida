function addItem(item){
    const itemHTML = 
`<div class="card-group col-lg-4 col-sm-12 col-md-6 card-espacio">
    <div class="card">
        <img src="${item.img}" class="card-img-top mx-auto" alt="...">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                    <p class="card-text price">${item.price}</p>
                    <p class="card-text">${item.description}</p>
                    </div>
                <div class="card-footer">
            <div class="text-center"><button id="btnTienda" type="button" class="btn btn-outline-dark">Agregar al carrito</button>\n </div>
        </div>
    </div>
</div>`;


    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
}

    addItem({
    'name':'Rosario, Hoja de sandia y Espada mini ',
    'img': '../img/productos/calidamx-p10.jpg' ,
    'price': '$190',
    'description':'¿Buscas plantas pequeñas para tu escritorio? ✍️ 🌿¡Estas tres son perfectas para ti!✨💓'});

    addItem({'name':'Espada mini ',
    'img': '../img/productos/calidamx-p2.jpg' ,
    'price': '$445',
    'description':'La mejor aliada para espacios pequeños y poco iluminados ✨🌿 Con taza chica, plato grande y base alta.'});

    addItem({'name':'Calathea burle marx ',
    'img': '../img/productos/calidamx-p3.jpg' ,
    'price': '$110',
    'description':'🌿 Para mantener bonita y sana a tu calathea sólo necesitas regarla dos veces a la semana y bien iluminada sin rayos de sol directos.✨💚'});

    addItem({'name':'Amoena dieffenbachia ',
    'img': '../img/productos/calidamx-p4.jpg' ,
    'price': '$110',
    'description':'🍃¿Sabías que la amoena también es conocida como Lotería? 🍃Llena tu casa de suerte 💫'});


    addItem({'name':'Cuna de Moisés ',
    'img': '../img/productos/calidamx-p1.jpg' ,
    'price': '$190',
    'description':'Son plantas super fáciles de cuidar 🌿 siempre y cuando pongas mucha atención a los riegos. Para que la tierra siempre este un poco húmeda. 💦'});


    addItem({'name':'Aglaonemas verde ',
    'img': '../img/productos/calidamx-p5.jpg' ,
    'price': '$280',
    'description':'Las aglaonemas son muy resistentes 💚 Riega una vez a la semana🌊 y ponla cerquita de la ventana☀️ se adapta  👌 muy bien a semisombra.'});

    addItem({'name':'Monsteras deliciosa ',
    'img': '../img/productos/calidamx-p6.jpg' ,
    'price': '$160',
    'description':'Las monsteras deliciosas jovenes no tienen fenestraciones en sus hojas🌿 comienzan a salir para dejar pasar luz cuando alcanza la madurez.✨'});

    addItem({'name':'Calathea triostar',
    'img': '../img/productos/calidamx-p7.jpg' ,
    'price': '$490',
    'description':'Las calatheas a lo largo del día, cambian la posición de sus hojas ✨ en función de estímulos de la iluminación y humedad.💚'});

    addItem({'name':'Calathea makoyana ',
    'img': '../img/productos/calidamx-p8.jpg' ,
    'price': '$110',
    'description':'La calathea te ayudará a crear ambientes húmedos para tus demás plantitas 🌿 y es ideal si tienes 🐶🐱 porque es petfriendly.⚡'});

    addItem({'name':'Sansevieria',
    'img': '../img/productos/calidamx-p9.jpg' ,
    'price': '$470',
    'description':'De hermosas hojas largas 🌿 y  fáciles cuidados. Necesita de muy pocos riegos, cada 10-15 días!💚'});
