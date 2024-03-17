const { getProducts } = require('../midellware/user');

exports.getproducts= async (req, res, next) => {
    try {
    const products = await getProducts();
    res.json(products);
    } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
}


