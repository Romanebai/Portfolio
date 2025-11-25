
// Fonction pour envoyer les données du formulaire au serveur
function form(name, email, message, website) {
    fetch('/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message, website})
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
        const website = document.getElementById('website').value;
        
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
    
    
    form(name, email, message, website); 
});


// Fonction pour ouvrir le menu burger
function openBurgerMenu() {
    const nav = document.querySelector('.page-header__navigation-list');
    nav.classList.toggle('show-page-header__navigation-list');
    const close = document.querySelector('.close');
    close.classList.toggle('show-close');
    const menu = document.querySelector('.menu-toggle');
    menu.style.display = 'none';
}

// Fonction pour fermer le menu burger
function closeBurgerMenu() {
    console.log('je suis dans closeBurgerMenu');
    const nav = document.querySelector('.page-header__navigation-list');
    nav.classList.remove('show-page-header__navigation-list');
    const close = document.querySelector('.close');
    close.classList.toggle('show-close');
    const menu = document.querySelector('.menu-toggle');
    menu.style.display = '';
    console.log('je suis opacity');
}

// Écouteur d'événement pour ouvrir le menu burger
document.getElementById('mobile-menu').addEventListener('click', openBurgerMenu);

// Écouteur d'événement pour fermer le menu burger

document.getElementById('closeBtn').addEventListener('click', function(event) {
    console.log('je suis dans closeBtn')
    event.preventDefault();
    closeBurgerMenu();
});

// Écouteur d'événement pour fermer le menu burger lorsqu'un lien est cliqué
document.addEventListener('click', function(event) {
    const nav = document.querySelector('.page-header__navigation-list');
    if (nav.classList.contains('show-page-header__navigation-list') && !event.target.closest('#mobile-menu')) {
        closeBurgerMenu();
    }
});


