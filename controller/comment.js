const { getComments } = require('../midellware/user');

exports.getcomments= async (req, res, next) => {
    try {
    const comment = await getComments();
    res.json(comment);
    } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
}
