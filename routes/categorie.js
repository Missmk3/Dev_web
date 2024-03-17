const express = require('express');
const router = express.Router();
const { getcategorie, getcategories } = require('../controller/categorie');


//route pour afficher tous les categorie de produits

router.get('/', getcategories);
  


//route pour afficher une seule categorie de produit
router.get('/categorie/:id',(req,res) => {
    const categorieId = req.params.id;
    res.send(`Affichage d\'une categorie de produit avec l'ID ${categorieId}`);

});

module.exports = router;

