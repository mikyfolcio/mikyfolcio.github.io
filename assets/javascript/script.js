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
    const privacyCheckbox = document.getElementById("privacy");

    contactForm.addEventListener("submit", function(event) {
        if (!privacyCheckbox || !privacyCheckbox.checked) {
            event.preventDefault();
            alert("Per inviare il messaggio devi accettare l'informativa sulla privacy.");
            return;
        }

        if (typeof emailjs === "undefined") {
            console.warn("EmailJS non caricato: il form di contatto non può essere inviato.");
            event.preventDefault();
            return;
        }

        event.preventDefault();

        const form = this;

        emailjs.init({
            publicKey: "LABXqDuBivpz5y5tK"
        });

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