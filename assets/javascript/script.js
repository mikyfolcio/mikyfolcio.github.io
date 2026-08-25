emailjs.init({
    publicKey: "LABXqDuBivpz5y5tK"
});

document.getElementById("contatti").addEventListener("submit", function(event) {
    event.preventDefault();

    const form = this;

    emailjs.sendForm(
        "service_y691tth",
        "template_0iszb91",
        this
    )
    .then(function() {
        alert("Messaggio inviato!");
        form.reset();
    })
    .catch(function(error) {
        console.error("Errore:", error);
        alert("Si è verificato un errore. Riprova.");
    });
});