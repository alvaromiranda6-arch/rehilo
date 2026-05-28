// Inicializar EmailJS
emailjs.init("kEHXwfcCP3X5DShnD");

// Seleccionar formulario
const form = document.getElementById("contact-form");

// Evento submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    emailjs.sendForm(
        "service_kc3p8u1",
        "template_k19a1m7",
        this
    )
    .then(() => {

        alert("Mensaje enviado correctamente");

        form.reset();

    })
    .catch((error) => {

        console.log("ERROR:", error);

        alert("Error al enviar mensaje");

    });

});