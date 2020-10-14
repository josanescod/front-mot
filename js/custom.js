var path;

window.onload = () => {
    getPageHtml();
}

function getPageHtml() {

    path = window.location.pathname;
    if (path === '/') {
        let elements = document.querySelectorAll('#mot-opciones li');
        let index=elements[0];
        index.classList.add("uk-active");
        index.lastChild.style.color = "#40a8ba";
        
    }
    else if (path.includes('/html/')) {

        path = path.substring(6);
        changeColorMenuOption(path);

    } else {

        path = path.substring(1);
        changeColorMenuOption(path);


    }
}

function changeColorMenuOption(enlace) {
    let ul = document.querySelectorAll('#mot-opciones li a');
    
    for (i = 0; i < ul.length; i++) {
        let opcion = ul[i].getAttribute("href");

        if (opcion.search(enlace) === 0) {

            ul[i].parentNode.classList.add("uk-active");
            ul[i].style.color = "#40a8ba";
        }
    }
}