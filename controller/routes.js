// routes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('accès à la page!');
});

module.exports = router;
