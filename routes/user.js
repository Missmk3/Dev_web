const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { getusers } = require("../controller/user");

// route pour recuperer tous les utilisqteurs
router.get('/', getusers);

// route pour l'inscription d'un nouvel etudiants
router.post('/new/register', (req,res) => {
    const{name,rename,email,password} = req.body;
    res.send('inscription d\'un nouvel etudiants');
});

 // route pour la connexion d'un étudiantsgetusersgetusers
 router.post('/register/user', (req,res) => {
    const{ email,password } = req.body;
    res.send('connexion d\'un etudiant');
 });

 // route pour s'inscrire a une activité
 router.post('/register/events', (req,res) => {
    const{ events } = req.body;
    res.send('inscription d\'un etudiant');
 });

 //Route pour accéder à la boîte à idées et voter pour une activité
router.post('/vote', (req, res) => {
    const { ideaId } = req.body;
    res.send('Vote pour une idée d\'activité');
});

// Route pour proposer une nouvelle idée d'activité
router.post('/submit', (req, res) => {
    const { ideaDescription, ideaName } = req.body;
    res.send('proposition d\'une nouvelle idée d\'activité');
});


// Route d'authentification
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

// Recherche de l'utilisateur dans la base de données
    const user = users.find(user => user.email === email);
    if (!user 
        ) {
        return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }

// Vérification du mot de passe
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
        return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

// Authentification réussie, renvoi des informations de l'utilisateur
    res.json({ id: user.id, role: user.role, email: user.email });
});



module.exports = router;