const contactModel = require('../models/contactModel');

const mainController = {

   homePage: (req, res) => {
        res.render('portfolio.ejs');
     },

    
    contact: (req, res) => {
        const { name, email, message, website } = req.body;

        //Ajout de la fonctionnalité HoneyPot 
        if (website && website.trim() !== ''){
            return res.status(400).json({ message: 'Spam détecté.'});
        } 

        // Appel au modèle pour envoyer l'e-mail
        contactModel(name, email, message)
            .then(() => {
            // Réponse réussie
            res.status(200).json({ message: 'Votre message a bien été envoyé' });
        })
            .catch((error) => {
            console.error('Une erreur est survenue lors de l\'envoi de l\'e-mail :', error);
            res.status(500).json({ message: 'Une erreur est survenue lors de l\'envoi de l\'e-mail' });        
        });
    }


};

module.exports = mainController;