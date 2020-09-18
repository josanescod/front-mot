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
                    
                    
                    muestraDatos(data,file);
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

   

}

function muestraDatos(data,file) {
    //Recorrer el objeto json 'data' y insertar en cada 'key' que corresponde a un elemento html su value que es el valor.
    Object.keys(data).forEach(function (key) {
        //console.table('key: '+ key + ', value: ' + data[key])
        
        if (key==='mot-nace'||key==='m-mot-nace'){
            darEstilo(key,data[key],file)


        }

        else{
        let tempKey = document.querySelector(`#${key}`)
        tempKey.innerHTML = data[key]
        }
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
        return 'movil'
    }else{
        console.log('escritorio')
        return 'escritorio'
    }
}

/* tiene que llegar una variable con cat/cas porque los arrays
tienen diferente longitud */
function darEstilo(id,datos,file){
            if (file==='es.json'){ //ES
            //separar data[key] en 3 frases
            let temp=datos.split(" ")
            let p1=temp.slice(0,2).join(' ')
            //console.log(p1)
            let p2= temp.slice(2,12).join(' ')
            //console.log(p2)
            let p3= temp.slice(12,15).join(' ')
            //console.log(p3)

            if (checkResolucion()==='escritorio'){
                let tempKey = document.querySelector(`#${id}`)
                tempKey.innerHTML = `MOT nace <span class="uk-text-bold">para llevar el poder <br> transformador de
                las palabras<br>
                hasta ti</span>, estés donde estés.`
            }else {
                
                let tempKey = document.querySelector(`#${id}`)
                tempKey.innerHTML = `${p1} <span class="uk-text-bold">${p2}</span> ${p3}`
            }    

            

            }else { //CAT
            //separar data[key] en 3 frases
            let temp=datos.split(" ")
            let p1=temp.slice(0,2).join(' ')
            //console.log(p1)
            let p2= temp.slice(2,14).join(' ')
            //console.log(p2)
            let p3= temp.slice(14,17).join(' ')
            //console.log(p3)

            

            if (checkResolucion()==='escritorio'){
                
                let tempKey = document.querySelector(`#${id}`)
                tempKey.innerHTML = `MOT neix <span class="uk-text-bold">per a portar el poder <br> transformador de les paraules <br> fins a tu,</span> estiguis on estiguis.`
            }else {
               
                let tempKey = document.querySelector(`#${id}`)
                tempKey.innerHTML = `${p1} <span class="uk-text-bold">${p2}</span> ${p3}`
            }    

            

            }
            

}