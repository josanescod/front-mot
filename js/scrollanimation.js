$(function () {
    $('button.mot-boton-azul-negro:first').on('click', function () {
        $('html, body').animate({
            scrollTop: $('div.uk-section').eq(2).offset().top
        }, 2000);
        setTimeout(function () {
            $('div.uk-section').eq(2).find('.uk-accordion-content').removeAttr('hidden');
            $('div.uk-section').eq(2).find('a.uk-accordion-title').parent().addClass('uk-open');
        }, 2700);
        
    });    
});