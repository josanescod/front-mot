/*
ejemplo codigo para cargar una imagen o otra dependiendo el ancho de pantalla:
prueba 1: se detecta el ancho del pantalla y se elimina uno de los uk-hidden segun corresponda al ancho de pantalla.
prueba 2: se detecta el ancho de pantalla y se carga una foto o otra segun corresponda al ancho de pantalla.

*/
var w = window;
var x = w.innerWidth;

window.onload = () => {

    scanWidth();


}

function scanWidth() {


    if (x < 480) {
        console.log('aplicar configuracion para movil')
        let bannermovil = document.querySelector('.mot-movil');
        bannermovil.classList.remove("uk-hidden");
        let contactoImagen = document.querySelector('#mot-contactoimg');
        contactoImagen.style.backgroundImage = "url('../img/contacto_movil.jpg')";

    } else {
        console.log('aplicar configuracion de escritorio')
        let bannerdesktop = document.querySelector('.mot-desktop');
        bannerdesktop.classList.remove("uk-hidden");
    }
}