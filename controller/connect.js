const mysql = require ('mysql');

//configurations de connexions des tables
const user = mysql.createuser({
    id:'',
    name:'',
    rename:'',
    email:'',
    password:'',   
});


//se connecter a la base de données 
connexion.connect((err)=> {
    if (err) {
        throw err;
    }
    console.log ('vous etes connecté');
});


// Créer un nouveau produit
exports.create = (req, res) => {
    if (!req.body.nom || !req.body.categorie || !req.body.prix || !req.body.description) {
        return res.status(400).json({ message: "Veuillez fournir toutes les informations nécessaires pour créer un produit." });
    }

    const produit = {
        nom: req.body.nom,
        categorie: req.body.categorie,
        prix: req.body.prix,
        description: req.body.description
    };

    connexion.query("INSERT INTO PRODUITS SET ?", produit, (error, results) => {
        if (error) throw error;
        res.json({ data: results, message: "Le nouveau produit a été créé avec succès." });
    });
};
 

// Récupérer et renvoyer tous les produits de la base de données
exports.findAll = (req, res) => {
    connexion.query('SELECT * FROM PRODUITS', (error, results) => {
        if (error) {
            throw error;
        }
        res.json(results);
    });
};

      
