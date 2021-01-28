/*
recaptcha
Usa esta clave de sitio web en el código HTML que tu sitio web sirve a los usuarios.
6LcMj-QZAAAAAGeaxxfUlqTgSptiTt7XovvIZ449
Usa esta clave secreta para la comunicación entre tu sitio web y el servicio reCAPTCHA
6LcMj-QZAAAAAELDroM4FEkYhag5aGzgWlXmlKGx
*/

$(document).ready(function () {
    //funcion para mostrar fecha actual en el footer
    function showCurrentYear(){
        let date = new Date();
        let year = date.getFullYear();        
        let yearParagraph = document.querySelectorAll('p');  
        yearParagraph[yearParagraph.length-2].innerHTML = yearParagraph[yearParagraph.length-2].innerHTML+`${year}`    
        yearParagraph[yearParagraph.length-3].firstChild.textContent = yearParagraph[yearParagraph.length-3].firstChild.textContent+`${year} | `
    }
    showCurrentYear();

    (function () {
        emailjs.init("user_eUy4bBvY6yrtUn0yEIaQJ");//mio
        // emailjs.init("user_CaRBXoZecKRtMDN3agyrC");//Lidia
    })();

    $('#mot-otro').click(function () {
        $("input[type='text'][name='conocido-otro']").attr("required", true);
        $("input[type='text'][name='conocido-otro']").attr("disabled", false);
    });

    $('.mot-otro').click(function () {
        $("input[type='text'][name='conocido-otro']").val("");
        $("input[type='text'][name='conocido-otro']").attr("required", false);
        $("input[type='text'][name='conocido-otro']").attr("disabled", true);
    });

    $(".mot-form").submit(function (event) {

        $this = this;

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
            telefono: $(this).find("[name=telefono]").val() ? 'Telefono: ' + $(this).find("[name=telefono]").val() : null,
            edad: $(this).find("[name=edad]:checked").val() ? 'Edad: ' + $(this).find("[name=edad]:checked").val() : null,
            profesion: $(this).find("[name=profesion]").val() ? 'Profesion: ' + $(this).find("[name=profesion]").val() : null,
            localidad: $(this).find("[name=localidad]").val() ? 'Localidad: ' + $(this).find("[name=localidad]").val() : null,
            conocido: $(this).find("[name=conocido]:checked").val() ? 'Ha conocido Mot por: ' + $(this).find("[name=conocido]:checked").val() : null,
            conocidoOtro: $(this).find("[name=conocido-otro]").val() ? 'Como fue: ' + $(this).find("[name=conocido-otro]").val() : null,
            mensaje: $(this).find("[name=mensaje]").val() ? 'Mensaje: ' + $(this).find("[name=mensaje]").val() : null
        };

        var typeForm = $(this).find("[data-type-form]").attr('data-type-form');

        grecaptcha.ready(function () {
            grecaptcha.execute('6LcmdcMUAAAAADUtZa8MRDNOSUk61KxXb0I_iUvb', {action: 'submit'}).then(function (token) {

                emailjs.send('gmail', 'forms', templateParams)
                    .then(function (response) {
                        $this.reset();
                        generateMesage(typeForm, true);
                        console.log('SUCCESS!', response.status, response.text);
                    }, function (error) {
                        $this.reset();
                        generateMesage(typeForm, false);
                        console.log('FAILED...', error);
                    });
            });
        });

    });

    function generateMesage(typeForm, succes) {

        var mensajes = {
            succes_contacto: '<div class="uk-alert-success mot-contact-succes" uk-alert>\n' +
                '<a class="uk-alert-close" uk-close></a>\n' +
                '<p>Tu consulta ha sido enviada con éxito. ¡Hablamos pronto!</p>\n' +
                '</div>',
            error_contacto: '<div class="uk-alert-danger mot-contact-error" uk-alert>\n' +
                '<a class="uk-alert-close" uk-close></a>\n' +
                '<p>El mensaje no se ha podido enviar, intentelo mas tarde o escriba directamente a\n' +
                '<a href="mailto:hola@motestudiodepalabras.com">hola@motestudiodepalabras.com.</a>\n' +
                '</p>\n' +
                '</div>!',
            succes_suscripcion: '<div class="uk-alert-success mot-contact-succes" uk-alert>\n' +
                '<a class="uk-alert-close" uk-close></a>\n' +
                '<p>La suscripción se ha realizado correctamente.</p>\n' +
                '</div>',
            error_suscripcion: '<div class="uk-alert-danger mot-contact-error" uk-alert>\n' +
                '<a class="uk-alert-close" uk-close></a>\n' +
                '<p>La suscripción no se ha podido realizar, intentelo mas tarde o escriba directamente a\n' +
                '<a href="mailto:hola@motestudiodepalabras.com">hola@motestudiodepalabras.com.</a>\n' +
                '</p>\n' +
                '</div>!',
            succes_inscripcion: '<div class="uk-alert-success mot-contact-succes" uk-alert>\n' +
                '<a class="uk-alert-close" uk-close></a>\n' +
                '<p>La inscripción se ha realizado correctamente.</p>\n' +
                '</div>',
            error_inscripcion: '<div class="uk-alert-danger mot-contact-error" uk-alert>\n' +
                '<a class="uk-alert-close" uk-close></a>\n' +
                '<p>La inscripcion no se ha podido realizar, intentelo mas tarde o escriba directamente a\n' +
                '<a href="mailto:hola@motestudiodepalabras.com">hola@motestudiodepalabras.com.</a>\n' +
                '</p>\n' +
                '</div>!'
        }

        if (typeForm === 'contacto') {
            succes ? $(".mot-alert-contacto").html(mensajes.succes_contacto) : $(".mot-alert-contacto").html(mensajes.error_contacto);
        }

        if (typeForm === 'inscripcion') {
            succes ? $(".mot-alert-inscripcion").html(mensajes.succes_inscripcion) : $(".mot-alert-inscripcion").html(mensajes.succes_inscripcion);
            $('[uk-modal]').each(function () {
                UIkit.modal($(this)).hide();
            });
        }

        if (typeForm === 'suscripcion') {
            succes ? $(".mot-alert-suscripcion").html(mensajes.succes_suscripcion) : $(".mot-alert-suscripcion").html(mensajes.error_suscripcion);
        }

        $('[uk-modal]').each(function () {
            UIkit.modal($(this)).hide();
        });

    }

});