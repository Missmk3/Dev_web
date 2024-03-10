const { getUsers } = require('../midelware/user');



exports.getusers= async (req, res) => {
    try {
    const users = await getUsers();
    res.json(users);
    } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
}
