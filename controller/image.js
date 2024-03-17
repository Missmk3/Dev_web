const { getImages } = require('../midellware/user');

exports.getimages= async (req, res, next) => {
    try {
    const images = await getImages();
    res.json(images);
    } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
}
