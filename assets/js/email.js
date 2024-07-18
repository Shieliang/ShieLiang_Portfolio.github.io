function sendmail(){

    let parms={

        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    };

    emailjs.send("service_8d9n0nk", "template_fpgbyig", parms)
        .then(function(response) {
            alert("Email Sent Successfully!");
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            alert("Failed to Send Email. Please try again.");
            console.log('FAILED...', error);
        });
}