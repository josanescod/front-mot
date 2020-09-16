/*ejemplo de codigo para cambiar el idioma, por defecto en castellano*/
var seleccion = 'es';
var file = 'es.json';
const mq = window.matchMedia( "(min-width: 960px)" );
var tipoMenu;
window.onload = () => {
    cargaIdioma(file);
    seleccionaIdioma();
    pageInfo();
    
}

function seleccionaIdioma() {

    //segun la resolucion en la que nos encontremos ejecutar un query o otro
    

    if (mq.matches) {
        tipoMenu = 'idioma-desktop'
        
    } else {
        tipoMenu = 'idioma-movil'
    }
    let selectLanguage = document.querySelector(`#${tipoMenu}`)
    selectLanguage.addEventListener('change', function () {
        seleccion = this.options[this.selectedIndex].value;
        if (seleccion === 'es') {
            file = 'es.json'
            cargaIdioma(file)
            
        } else {
            file = 'cat.json'
            cargaIdioma(file);
            
        }
    });
    
}

function cargaIdioma(file) {
    fetch(`./language/${file}`)
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Ha habido algun problema. Status Code: ' +
                        response.status);
                    return;
                }
                // Examine the text in the response
                response.json().then(function (data) {
                    console.log(data);
                    muestraDatos(data);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

   

}

function muestraDatos(data) {
    //Recorrer el objeto json 'data' y insertar en cada 'key' que corresponde a un elemento html su value que es el valor.
    Object.keys(data).forEach(function (key) {
        //console.table('key: '+ key + ', value: ' + data[key])
        let tempKey = document.querySelector(`#${key}`)
        tempKey.innerHTML = data[key]
    });
}

function pageInfo(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page===''){
        console.log('pagina cargada: index.html')
    }
    console.log( page );
}

function checkResolucion(){
    if (window.innerWidth < 960) {
        console.log('movil')
    }else{
        console.log('escritorio')
    }
}