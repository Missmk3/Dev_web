const express = require('express');
const router = express.Router();
const { getevents } = require('../controller/event');


//route pour afficher tous les events
router.get('/',getevents);
    

// Route pour afficher un événement spécifique
router.get('/specifique:id', (req, res) => {
    const eventId = req.params.id;
    res.send(`Affichage de l'événement avec l'ID ${eventId}`);
});

// Route pour créer un nouvel événement
router.post('/new', (req, res) => {
    const { name_id, description_id, start_date, end_date } = req.body;
    res.send('Création d\'un nouvel événement');
});

// Route pour supprimer un événement existant
router.delete('/:id', (req, res) => {
    const eventId = req.params.id;
    res.send(`Suppression de l'événement avec l'ID ${eventId}`);
});

module.exports = router;