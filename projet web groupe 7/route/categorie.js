const express = require('express');
const router = express.Router();

router.get('/categorie', (req, res) => {
    res.send('accès à la page!','/categorie');
});

module.exports = router;