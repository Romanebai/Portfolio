
// Fonction pour envoyer les données du formulaire au serveur
function form(name, email, message) {
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        }

        return response.text().then(text => {throw new Error(text);} );
    })

    .then(response => {
        console.log(response.message); 
        if (response.message ===  'Votre message a bien été envoyé') {
        const confirmationMessage = document.getElementById('confirmation-message');
        confirmationMessage.style.display = 'block';
        const form = document.getElementById('contact-container');
        form.style.display = 'none';
        }
    })
    .catch(error => {
        console.error('Une erreur est survenue :', error);
    });
}
    
    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        errorName.style.opacity = "0";
        errorEmail.style.opacity = "0";
        errorMessage.style.opacity = "0";

        if (!name) {
            errorName.style.opacity = "1";
            return;
        } else {
            errorName.style.opacity = "0";
        }
        if (!email) {
            errorEmail.style.opacity = "1";
            return;
        } else {
            errorEmail.style.opacity = "0";
        }
        if (!message) {
            errorMessage.style.opacity = "1";
            return;
        } else {
            errorMessage.style.opacity = "0";
        }
    
    
    form(name, email, message); 
});

// Fonction pour afficher le menu burger
document.getElementById('mobile-menu').addEventListener('click', function () {
    const nav = document.querySelector('.page-header__navigation-list');
    nav.classList.toggle('show-page-header__navigation-list');
    const close = document.querySelector('.close');
    close.classList.toggle('show-close');
    const menu = document.querySelector('.menu-toggle');
    menu.style.opacity = '0';

  });

document.getElementById('closeBtn').addEventListener('click', function () {
    const nav = document.querySelector('.page-header__navigation-list');
    nav.classList.remove('show-page-header__navigation-list');
    const close = document.querySelector('.close');
    close.classList.remove('show-close');
    const menu = document.querySelector('.menu-toggle');
    menu.style.opacity = '1';
    
});
