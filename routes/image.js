const express = require ('express');
const router = express.Router();
const { getimages } = require('../controller/image');


// Route pour afficher toutes les images
router.get('/',getimages);

// Route pour afficher une image spécifique
router.get('/images/:id', (req, res) => {
    const imageId = req.params.id;
    res.send(`Affichage de l'image avec l'ID ${imageId}`);
});

// Route pour ajouter une nouvelle image
router.post('/images', (req, res) => {
    const { name, url, description } = req.body;
    res.send('Ajout d\'une nouvelle image');
});


// Route pour supprimer une image existante
router.delete('/images/:id', (req, res) => {
    const imageId = req.params.id;
    res.send(`Suppression de l'image avec l'ID ${imageId}`);
});

module.exports = router;


