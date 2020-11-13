$(document).ready(function () {

    (function () {
        emailjs.init("user_eUy4bBvY6yrtUn0yEIaQJ");
    })();

    $('#mot-otro').click(function () {
        $("input[type='text'][name='conocido-otro']").attr("required",true);
        $("input[type='text'][name='conocido-otro']").attr("disabled",false);
    });

    $('.mot-otro').click(function () {
        alert("HOLA");
        $("input[type='text'][name='conocido-otro']").val("");
        $("input[type='text'][name='conocido-otro']").attr("required",false);
        $("input[type='text'][name='conocido-otro']").attr("disabled",true);
    });

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
            form_type: $(this).find("[name=form_type]").val(),
            tipo: $(this).find("[name=tipo]").val() ? 'Tipo: ' + $(this).find("[name=tipo]").val() : null,
            dia: $(this).find("[name=dia]").val() ? 'Dia: ' + $(this).find("[name=dia]").val() : null,
            horario: $(this).find("[name=horario]").val() ? 'Horario: ' + $(this).find("[name=horario]").val() : null,
            inicio: $(this).find("[name=inicio]").val() ? 'Inicio: ' + $(this).find("[name=inicio]").val() : null,
            duracion: $(this).find("[name=duracion]").val() ? 'Duracion: ' + $(this).find("[name=duracion]").val() : null,
            nombre: $(this).find("[name=nombre]").val() ? 'Nombre: ' + $(this).find("[name=nombre]").val() : null,
            apellidos: $(this).find("[name=apellidos]").val() ? 'Apellidos: ' + $(this).find("[name=apellidos]").val() : null,
            email: $(this).find("[name=email]").val() ? 'Email: ' + $(this).find("[name=email]").val() : null,
            telefono: $(this).find("[name=telefono]").val() ? 'Apellidos: ' + $(this).find("[name=telefono]").val() : null,
            edad: $(this).find("[name=edad]:checked").val() ? 'Edad: ' + $(this).find("[name=edad]:checked").val() : null,
            profesion: $(this).find("[name=profesion]").val() ? 'Profesion: ' + $(this).find("[name=profesion]").val() : null,
            localidad: $(this).find("[name=localidad]").val() ? 'Localidad: ' + $(this).find("[name=localidad]").val() : null,
            conocido: $(this).find("[name=conocido]:checked").val() ? 'Ha conocido Mot por: ' + $(this).find("[name=conocido]:checked").val() : null,
            conocidoOtro: $(this).find("[name=conocido-otro]").val() ? 'Como fue: ' + $(this).find("[name=conocido-otro]").val() : null,
            mensaje: $(this).find("[name=mensaje]").val() ? 'Mensaje: ' + $(this).find("[name=mensaje]").val() : null
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


