
var galeryBox = document.getElementById('box-images');// contenedor donde se almacenarán las imgagenes.
var ruta = "assets/images/img-"; //ruta principal de las fotos.
var images = new Array(); //Array de objetos por imagen.

function galery(){ //Funcion para imprimir imagenes.

	var fragContainer = document.createDocumentFragment();
		for (var i = 0; i < 6; i++) {

			var url = ruta + (i+1) + ".jpg";
			var name = "PROYECTO "+ (i+1);
			var link = "#image-" + (i+1);
			images.push({title: name, url: url, link: link, alt: name});

			var figure = document.createElement("figure");
			var a = document.createElement("a");
			a.classList.add("popup-link");
			a.setAttribute("href", images[i].link);
			var img = document.createElement("img");
			img.setAttribute("src", images[i].url);
			img.setAttribute("alt", images[i].alt);
			var figcaption = document.createElement("figcaption");
			figcaption.innerHTML = images[i].title;

			a.appendChild(img);
			figure.appendChild(a);
			figure.appendChild(figcaption);
			fragContainer.appendChild(figure);
		}

	galeryBox.appendChild(fragContainer);
}
galery();
/*
var links = document.getElementsByClassName('popup-link');
	for (var i in links) {
		links[i].addEventListener('click',function(event) {
		event.preventDefault();

			var identifier = "image-"+ (i+1);
			var ruta = images[i].url;

			document.getElementsByClassName("modal-wrapper").setAttribute("id", identifier);
			document.getElementById('full-image').setAttribute("src", ruta);
		});
	}*/
var popupBox = document.getElementById("popup-contain");
function popup(){
	var 
}
/*
<div class="modal-wrapper" id="image-1">
		<div class="popup-contenedor">
			<img src="assets/images/img-1.jpg" alt="" width="100%">
			<a class="popup-cerrar" href="#work">x</a>
		</div>
</div>
*/
