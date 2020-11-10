$(document).ready(function () {

    (function () {
        emailjs.init("user_eUy4bBvY6yrtUn0yEIaQJ");
    })();

    $(".mot-form").submit(function (event) {

        $this = this;

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
        
        var templateParams = {
            form_type: $(this).find("#form_type").val(),
            nombre: $(this).find("#nombre").val() ? 'Nombre: '+$(this).find("#nombre").val() : null,
            email: $(this).find("#email").val() ? 'Email: '+$(this).find("#email").val() : null,
            localidad: $(this).find("#localidad").val() ? 'Localidad: '+$(this).find("#localidad").val() : null,
            mensaje: $(this).find("#mensaje").val() ? 'Mensaje: '+$(this).find("#mensaje").val() : null
        };

        emailjs.send('gmail', 'forms', templateParams)
            .then(function (response) {
                $this.reset();
                $(".mot-alert").html(succes);
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                $this.reset();
                $(".mot-alert").html(error);
                console.log('FAILED...', error);
            });

    });
});


