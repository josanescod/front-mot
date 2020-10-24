//cuando se haga click en una opcion del menu , se cierre automaticamente
window.onload = () => {

    var bHome = document.querySelector('#mHome')
    var bProyectos = document.querySelector('#mMot')
    var btaller1 = document.querySelector('#mtaller1')
    var btaller2 = document.querySelector('#mtaller2')
    var borg_taller = document.querySelector('#morg_taller')
    var bContact = document.querySelector('#mContacto');
    var elements = [bHome, bProyectos,btaller1,btaller2,borg_taller, bContact];

    for (e in elements) {

        console.log(elements[e])
        elements[e].addEventListener('click', function () {
            UIkit.offcanvas('#menu_movil').hide();
        })
    }
}