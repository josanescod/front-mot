$(document).ready(function () {
    (function () {
        emailjs.init("user_eUy4bBvY6yrtUn0yEIaQJ");
    })();

    var templateParams = {
        name: 'James',
        notes: 'Check this out!'
    };

    $(".mot-form").submit(function (event) {
        event.preventDefault();
        emailjs.send('gmail', 'contact_form', templateParams)
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
});