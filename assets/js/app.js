
var galeryBox = document.getElementById('box-images');// contenedor donde se almacenarán las imagenes.
var ruta = "assets/images/img-"; //ruta principal de las fotos.
var images = new Array(); //Array de objetos por imagen.

function galery(){ //Funcion para imprimir imagenes.

	var fragContainer = document.createDocumentFragment();
		for (var i = 0; i < 12; i++) {

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
var popupBox = document.getElementById("popup-contain");
function popup(){

	for (var i in images) {
		var identifier = "image-"+ (parseInt(i)+1);

		var modal = document.createElement("div");
		modal.classList.add("modal-wrapper");
		modal.setAttribute("id", identifier);

		var popUp = document.createElement("div");
		popUp.classList.add("popup-contenedor");
		var photo = document.createElement("img");
		photo.setAttribute("src", images[i].url);
		photo.setAttribute("width", "100%");
		var x = document.createElement("a");
		x.classList.add("popup-cerrar");
		x.setAttribute("href", images[i].link);
		x.innerHTML = "x";

		popUp.appendChild(photo);
		popUp.appendChild(x);
		modal.appendChild(popUp);
		popupBox.appendChild(modal);
	}

}
popup();
*/
