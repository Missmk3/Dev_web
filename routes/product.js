const express = require('express');
const router = express.Router();
const { getproducts } = require('../controller/product');



// route pour afficher tous les produits
router.get('/', getproducts);


//route pour afficher un produit spécifique
router.get('/:id',(req,res) => {
    const productId = req.params.id;
    res.send("afficher le produit specifié");
});


//route pour ajouter un nouveau produit
router.post('/add',(req,res) => {
    const{name,categorie,priece,description} = req.body;
    res.send("ajout d\'un produit");

});

//route supprimer un produit
router.delete('/supprimer', (req,res) =>{
    const productId = req.params.Id;
    res.send("suppression d\'un produit");

});

module.exports = router