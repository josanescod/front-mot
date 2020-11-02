$(document).ready(function () {
    (function () {
        emailjs.init("user_eUy4bBvY6yrtUn0yEIaQJ");
    })();

    $(".mot-contact-form").submit(function (event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'contact_form', this)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
});