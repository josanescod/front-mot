var path,name;

window.onload = () => {

    seleccionaPagina();


}

function seleccionaPagina() {
    
    path = window.location.pathname;
    console.log(path);
    

   if (path.includes('/html/')){
        console.log(path);
        name=path.substring(6);
        console.log(name);
        recorrehrefs(name);
        
    }else {
        
        console.log(path);
        name = path.substring(1);
        path.substring(1);
        console.log(name);
        recorrehrefs(name);

        
    }

    
    
}


function recorrehrefs(ruta,enlace){
    var ul = document.querySelectorAll('#mot-opciones li a');
        console.log('##############')
        console.log('direcciones')
        console.log('##############')
        for (i=0; i<ul.length;i++){
            console.log(ul[i].getAttribute("href"));
            if (enlace===ul[i].getAttribute("href")){
                console.log('marcar esta con clase activa->'+ul[i].getAttribute("href"));
            }
        }
}