formButton = document.getElementById('submitButton');

formButton.addEventListener('click', function(e){
    e.preventDefault();
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    var templateParams = {
        user_name: name,
        user_email: email,
        message: message
    };
    if(name != '' && email != '' && message != ''){
        if (email.indexOf('.') !== -1 && email.indexOf('@') !== -1)
            emailjs.send('service_sc4gm47', 'template_ubfch6p', templateParams)
                .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Message was sent successfully!');
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                }, function(error) {
                console.log('FAILED...', error);
                alert('There was an error sending your message!' + error);
                });
        else if(email.indexOf('.') == -1 || email.indexOf('@') == -1){
            alert('Email has to be valid!');
            return;
        }
    }
    else{
        alert('All fields need to be filled!');
        return;
    }
});
