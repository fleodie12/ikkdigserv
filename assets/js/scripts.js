// Autor: LF
// Ref: DIG/IT 3
// Erstellungsdatum: 22.08.2024
// Änderungsdatum: 23.08.2024

// Variablen
const popup = document.getElementById('popup');
const emailLink = document.getElementById('popup-email-link');
const cards = document.querySelectorAll('.card.offline');

// Zeigt das Popup an
function showPopup(email) {
    emailLink.href = `mailto:${email}`;
    popup.classList.add('visible');
}

// Schließt das Popup
function closePopup() {
    popup.classList.remove('visible');
}

// Fügt Event-Handler zu den Offline-Karten hinzu
cards.forEach(card => {
    card.addEventListener('click', function() {
        const email = this.getAttribute('data-email');
        showPopup(email);
    });
});

// Schließt das Popup, wenn außerhalb davon geklickt wird
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        closePopup();
    }
});
