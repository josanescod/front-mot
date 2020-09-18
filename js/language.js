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
                //hardcoded se tendria que buscar mejorar solución
                tempKey.innerHTML = `MOT nace <span class="uk-text-bold">para llevar el poder <br> transformador de
                las palabras<br>
                hasta ti</span>, estés donde estés.`

                //harcoded bloque7
                let texto_b7 = document.querySelector('#texto-b7');
                texto_b7.innerHTML = `MOT es un <span class="uk-text-bold">estudio de palabras</span>.<br> Quizá te
                resulte extraña esta definición,<br>
                pero es un <span class="uk-text-bold">concepto nuevo que nace de creer<br> en el poder transformador de las palabras</span>. `
                let t1p = document.querySelector('#t1p');
                t1p.innerHTML=` Las palabras tienen <span id="t1span" class="uk-text-bold">el poder de
                crear.</span>
                Descúbrelo con el primer taller de anti-técnica narrativa para
                vencer el miedo a la hoja en blanco.`
                let t2p = document.querySelector('#t2p');
                t2p.innerHTML=`Las palabras tienen <span class="uk-text-bold">el poder de
                cambiarnos.</span>
                Lo comprobarás en este espacio de aprendizaje y reflexión sobre el lenguaje no
                sexista.`
                let pb5L = document.querySelector('#pb5L');
                pb5L.innerHTML=`¿Te gustaría que tu centro, asociación o empresa ofreciese<br>
                el <span class="uk-text-bold">Taller de Escritura Creativa</span> o el <span
                    class="uk-text-bold">
                    Taller de Lenguaje Inclusivo?
                </span>`
            }else {
                
                let tempKey = document.querySelector(`#${id}`)
                tempKey.innerHTML = `${p1} <span class="uk-text-bold">${p2}</span> ${p3}`

                //hardcoded bloque 7 se tendria que buscar mejorar solución
                let texto_b7_m = document.querySelector('#texto-b7-m');
                texto_b7_m.innerHTML=`MOT es un <span class="uk-text-bold">estudio de palabras</span>.Quizá te resulte extraña esta
                definición, pero es un <span class="uk-text-bold">concepto nuevo que nace de creer en el poder
                transformador de las palabras</span>.`
                let t1p_m = document.querySelector('#m-t1p');
                t1p_m.innerHTML=`Las palabras tienen <span id="m-t1span"class="uk-text-bold">el poder de
                crear.</span>
                Descúbrelo con el primer taller de anti-técnica narrativa para
                vencer el miedo a la hoja en blanco.`
                let t2p_m = document.querySelector('#m-t2p');
                t2p_m.innerHTML=`Las palabras tienen <span class="uk-text-bold">el poder de
                cambiarnos.</span>
                Lo comprobarás en este espacio de aprendizaje y reflexión sobre el lenguaje no
                sexista.`
                let pb5L_m = document.querySelector('#m-pb5L');
                pb5L_m.innerHTML=`¿Te gustaría que tu centro, asociación o empresa ofreciese<br>
                el <span class="uk-text-bold">Taller de Escritura Creativa</span> o el <span
                    class="uk-text-bold">
                    Taller de Lenguaje Inclusivo?
                </span>`

            }    

            //selecciona la clase bg2 y le añadimos a los dos div bg2.svg
            let seccion2 = document.querySelectorAll('.bg2');
            for (i=0;i<seccion2.length; i++){
                seccion2[i].style.backgroundImage = `url('img/bg2.svg')`;
            }
            //selecciona logoyellow2 del bg7 y cambia el svg 
            let logoseccion7 = document.querySelectorAll('.bg7-logo');
            for (i=0;i<logoseccion7.length;i++){
                logoseccion7[i].src='img/logoyellow2.svg';
               
            }   
            
            //footer es
            let footer = document.querySelector('#footer');
            footer.innerHTML=`Mot Estudio de palabras &copy;2020 | Aviso Legal | Política de privacidad by
            <a href='https://uniproyect.com' target='blank'>Uniproyect</a>
            <a href="#" uk-totop uk-scroll class="uk-align-right"></a>`

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
                //harcoded bloque7
                let texto_b7 = document.querySelector('#texto-b7');
                texto_b7.innerHTML = `MOT és un <span class="uk-text-bold">estudi de paraules</span>.<br> Potser et
                resulta estranya aquesta definició,<br>
                però és un <span class="uk-text-bold">un concepte nou que neix de creure<br> en el poder transformador de les paraules</span>. `
                let t1p = document.querySelector('#t1p');
                t1p.innerHTML=` Les paraules tenen <span id="t1span" class="uk-text-bold">el poder de
                crear.</span>
                Descobreix-ho amb el primer taller d'anti-técnica narrativa per
                vèncer la por a la fulla en blanc.`
                let t2p = document.querySelector('#t2p');
                t2p.innerHTML=`Les paraules tenen <span class="uk-text-bold">el poder de
                canviar-nos.</span>
                Ho comprovaràs en aquest espai d'aprenentatge i reflexió sobre el llenguatge no
                sexista.`
                let pb5L = document.querySelector('#pb5L');
                pb5L.innerHTML=`T'agradaria que el teu centre, associació o empresa oferís<br>
                el <span class="uk-text-bold">Taller d'Escriptura Creativa</span> o el <span
                    class="uk-text-bold">
                    Taller de Llenguatge Inclusiu?
                </span>`
            
            
            }else {
               
                let tempKey = document.querySelector(`#${id}`)
                tempKey.innerHTML = `${p1} <span class="uk-text-bold">${p2}</span> ${p3}`
                
                //hardcoded bloque 7 se tendria que buscar mejorar solución
                let texto_b7_m = document.querySelector('#texto-b7-m');
                texto_b7_m.innerHTML=`MOT és un <span
                class="uk-text-bold">estudi de paraules</span>.Potser et resulta estranya aquesta
                definició, però és un <span class="uk-text-bold">concepte nou que neix de creure en el poder
                transformador de les paraules.</span>`
                let t1p_m = document.querySelector('#m-t1p');
                t1p_m.innerHTML=`Les paraules tenen <span id="m-t1span"class="uk-text-bold">el poder de
                crear.</span>
                Descobreix-ho amb el primer taller d'anti-técnica narrativa per
                vèncer la por al full en blanc.`
                let t2p_m = document.querySelector('#m-t2p');
                t2p_m.innerHTML=`Les paraules tenen <span class="uk-text-bold">el poder de
                canviar-nos.</span>
                Ho comprovaràs en aquest espai d'aprenentatge i reflexió sobre el llenguatge no
                sexista.`
                let pb5L_m = document.querySelector('#m-pb5L');
                pb5L_m.innerHTML=`T'agradaria que el teu centre, associació o empresa oferís<br>
                el <span class="uk-text-bold">Taller d'Escriptura Creativa</span> o el <span
                    class="uk-text-bold">
                    Taller de Llenguatge Inclusiu?
                </span>`
            
            
            }   
            
            //selecciona la clase bg2 y le añadimos a os ldos div bg2_cat.svg
            let seccion2 = document.querySelectorAll('.bg2');
            for (i=0;i<seccion2.length; i++){
                seccion2[i].style.backgroundImage = `url('img/bg2_cat.svg')`;
            }
            //selecciona logoyellow2 del bg7 y cambia el svg 
            let logoseccion7 = document.querySelectorAll('.bg7-logo');
            for (i=0;i<logoseccion7.length;i++){
                logoseccion7[i].src='img/logoyellow2_cat.svg';
            }   
            //footer cat
            let footer = document.querySelector('#footer');
            footer.innerHTML=`Mot Estudio de palabras &copy;2020 | Avís Legal | Política de privacitat by
            <a href='https://uniproyect.com' target='blank'>Uniproyect</a>
            <a href="#" uk-totop uk-scroll class="uk-align-right"></a>`
            

            }
            

}