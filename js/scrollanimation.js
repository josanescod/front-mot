$(function () {
    $('button.mot-boton-azul-negro:first').on('click', function () {
        reset();
        $('html, body').animate({
            scrollTop: $('div.uk-section').eq(2).offset().top
        }, 2000);
        setTimeout(function () {
            $('div.uk-section').eq(2).find('.uk-accordion-content').removeAttr('hidden');
            $('div.uk-section').eq(2).find('a.uk-accordion-title').parent().addClass('uk-open');
        }, 2700);
        
    });


    /*function reset(){
        if (typeof $('div.uk-section').eq(2).find('.uk-accordion-content').attr('hidden')!== typeof undefined &&
        typeof $('div.uk-section').eq(2).find('.uk-accordion-content').attr('hidden')!== false){
            console.log('Elementos estaban ocultos')
        }else {
            console.log('Los elementos ya estan desplegados!')
        }
    }*/
});