const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage);
router.post('/contact', mainController.contact);  // Ajout de la route pour le formulaire de contact

module.exports = router;