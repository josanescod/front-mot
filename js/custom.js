$(document).ready(function () {

    (function () {
        emailjs.init("user_eUy4bBvY6yrtUn0yEIaQJ");
    })();

    $(".mot-contact-form").submit(function (event) {

        var succes = '<div class="uk-alert-success mot-contact-succes" uk-alert>\n' +
            '    <a class="uk-alert-close" uk-close></a>\n' +
            '    <p>El mensaje se ha enviado correctamente.</p>\n' +
            '</div>'
        var error = '<div class="uk-alert-danger mot-contact-error" uk-alert>\n' +
            '    <a class="uk-alert-close" uk-close></a>\n' +
            '    <p>El mensaje no se ha podido enviar, intentelo mas tarde o escriba directamente a\n' +
            '        <a href="mailto:hola@motestudiodepalabras.com">hola@motestudiodepalabras.com.</a>\n' +
            '    </p>\n' +
            '</div>!'

        event.preventDefault();

        emailjs.sendForm('gmail', 'contact_form', this)
            .then(function (response) {
                $(".mot-contact-form")[0].reset();
                $(".mot-alert").html(succes);
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                $(".mot-contact-form")[0].reset();
                $(".mot-alert").html(error);
                console.log('FAILED...', error);
            });

    });
});


