const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('accès à la page!');
});

router.get('/products', (req,res) => {
    res.send('concernant les produits');
});

module.exports = router;