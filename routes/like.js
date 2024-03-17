const express = require('express');
const router = express.Router();






//route pour ajouter un like à un évènement

router.post('/', (req,res) => {
    const{id_user,id_event} = req.body;
    res.send("ajout d\'un like à un event");

});

// route pour supprimer un like à un evenment
router.delete('/:id',(req,res) => {
    const likeId = req.params.id;
    res.send("suppression du like avec l'id ${likeId}");
});


module.exports = router;
