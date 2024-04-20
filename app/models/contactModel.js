const nodemailer = require('nodemailer');


// Fonction pour envoyer un e-mail
function contactModel(name, email, message) {
    
    return new Promise((resolve, reject) => {
        // Configurer le transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', 
            auth: {
                user: process.env.EMAIL,
                pass: process.env.APP_PSW
            },
        });

        // Options pour l'e-mail
        const mailOptions = {
            from: email,
            to: process.env.EMAIL,
            subject: `Nouveau message du formulaire de contact`,
            text: `Nom: ${name},\n Email: ${email},\n Message: ${message}`
        };

        // Envoyer l'e-mail
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Une erreur est survenue lors de l\'envoi de l\'e-mail :', error);
                reject(error);
            } else {
                console.log('E-mail envoyé : ' + info.response);
                resolve();
            }
        });
    });
}

module.exports = contactModel;
