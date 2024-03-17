const { getCategories } = require('../midellware/user');

exports.getcategories= async (req, res, next) => {
    try {
    const categorie = await getCategories();
    res.json(categorie);
    } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
}


