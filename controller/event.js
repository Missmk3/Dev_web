const { getEvents } = require('../midellware/user');

exports.getevents= async (req, res, next) => {
    try {
    const events = await getEvents();
    res.json(events);
    } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
}