const express = require('express');
const router = express.Router();
const { getcomments } = require('../controller/comment');


// route pour récupérer tous les commentaires
router.get('/', getcomments);


module.exports = router;


