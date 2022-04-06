function addItem(item, id){
    const itemHTML = 
`<div id="card"class="card-group col-lg-4 col-sm-12 col-md-6 card-espacio">
    <div class="card">
        <img id = "image${id}"src="${item.img}" class="card-img-top mx-auto" alt="...">
            <div class="card-body">
                <h5 id = "title${id}"class="card-title${id}">${item.name}</h5>
                    <p  id = "price${id}"class="card-text price ${id}">${item.price}</p>
                    <p  id = "description${id}" class="card-text">${item.description}</p>
                    </div>
                <div class="card-footer">
            <div class="text-center"><button id="btnTienda${id}"  type="button" class="btn btn-outline-dark">Agregar al carrito</button>\n </div>
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
    'description':'¿Buscas plantas pequeñas para tu escritorio? ✍️ 🌿¡Estas tres son perfectas para ti!✨💓'},1);

    addItem({'name':'Espada mini ',
    'img': '../img/productos/calidamx-p2.jpg' ,
    'price': '$445',
    'description':'La mejor aliada para espacios pequeños y poco iluminados ✨🌿 Con taza chica, plato grande y base alta.'},2);

    addItem({'name':'Calathea burle marx ',
    'img': '../img/productos/calidamx-p3.jpg' ,
    'price': '$110',
    'description':'🌿 Para mantener bonita y sana a tu calathea sólo necesitas regarla dos veces a la semana y bien iluminada sin rayos de sol directos.✨💚'},3);

    addItem({'name':'Amoena dieffenbachia ',
    'img': '../img/productos/calidamx-p4.jpg' ,
    'price': '$110',
    'description':'🍃¿Sabías que la amoena también es conocida como Lotería? 🍃Llena tu casa de suerte 💫'},4);


    addItem({'name':'Cuna de Moisés ',
    'img': '../img/productos/calidamx-p1.jpg' ,
    'price': '$190',
    'description':'Son plantas super fáciles de cuidar 🌿 siempre y cuando pongas mucha atención a los riegos. Para que la tierra siempre este un poco húmeda. 💦'},5);


    addItem({'name':'Aglaonemas verde ',
    'img': '../img/productos/calidamx-p5.jpg' ,
    'price': '$280',
    'description':'Las aglaonemas son muy resistentes 💚 Riega una vez a la semana🌊 y ponla cerquita de la ventana☀️ se adapta  👌 muy bien a semisombra.'},6);

    addItem({'name':'Monsteras deliciosa ',
    'img': '../img/productos/calidamx-p6.jpg' ,
    'price': '$160',
    'description':'Las monsteras deliciosas jovenes no tienen fenestraciones en sus hojas🌿 comienzan a salir para dejar pasar luz cuando alcanza la madurez.✨'},7);

    addItem({'name':'Calathea triostar',
    'img': '../img/productos/calidamx-p7.jpg' ,
    'price': '$490',
    'description':'Las calatheas a lo largo del día, cambian la posición de sus hojas ✨ en función de estímulos de la iluminación y humedad.💚'},8);

    addItem({'name':'Calathea makoyana ',
    'img': '../img/productos/calidamx-p8.jpg' ,
    'price': '$110',
    'description':'La calathea te ayudará a crear ambientes húmedos para tus demás plantitas 🌿 y es ideal si tienes 🐶🐱 porque es petfriendly.⚡'},9);

    addItem({'name':'Sansevieria',
    'img': '../img/productos/calidamx-p9.jpg' ,
    'price': '$470',
    'description':'De hermosas hojas largas 🌿 y  fáciles cuidados. Necesita de muy pocos riegos, cada 10-15 días!💚'},10);

    let productoStorage = localStorage.getItem("Info");
    console.log(productoStorage);
    let arrayProducto = JSON.parse(productoStorage);
    console.table(arrayProducto);
    addItem(arrayProducto);
