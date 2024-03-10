const { query, getConnection } = require("../bd/connection");

async function getUser(id){
    return await query ('SELECT * FROM user WHERE id = ?', id)
}

// Récupérez toutes les données de la table "user"
async function getAllUsers() {
    const conn = await getConnection();
    try {
        const [rows, fields] = await conn.execute('SELECT * FROM user');
        return rows;
    } catch (error) {
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release(); // Libérez la connexion après utilisation
    }
}


async function getUsers(){
    return await getAllUsers();
}

module.exports = {
    getUser,
    getUsers,


}