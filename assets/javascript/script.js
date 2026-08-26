const menuToggle = document.querySelector(".mobile-menu-toggle");
const navigation = document.querySelector("nav");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function() {
        const isOpen = navigation.classList.toggle("menu-open");
        menuToggle.setAttribute("aria-expanded", isOpen);
    });
}

const contactForm = document.getElementById("contatti");

if (contactForm) {
    emailjs.init({
        publicKey: "LABXqDuBivpz5y5tK"
    });

    contactForm.addEventListener("submit", function(event) {
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
}