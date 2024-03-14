const { query, getConnection } = require("../bd/connection");


//fonction asynchrone qui permet de récupérer les données d'un utilisateur spécifique en fonction de son id en exécutant la requete sql
async function getUser(id){
    return await query ('SELECT * FROM user WHERE id = ?', id)
}

// Récupérez toutes les données de la table "user"
async function getAllUsers() {
    const conn = await getConnection(); // ensuite obtention d'une connexion avec la bd
    try {
        const [rows, fields] = await conn.execute('SELECT * FROM user');
        return rows;
    } catch (error) { // en cas d'erreur envoie un message 
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release(); // Libérez la connexion après utilisation
    }
}


// Récupérez toutes les données de la table "product"
async function getAllProducts() {
    const conn = await getConnection(); // ensuite obtention d'une connexion avec la bd
    try {
        const [rows, fields] = await conn.execute('SELECT * FROM products');
        return rows;
    } catch (error) { // en cas d'erreur envoie un message 
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release(); // Libérez la connexion après utilisation
    }
}



// la fonction asynchrone retourne juste la fonction getAllusers et getAllproducts pour récupérer tt les données des utilisateurs et des produits
async function getUsers(){
    return await getAllUsers();
}

async function getProducts(){
    return await getAllProducts();
}






module.exports = {
    getUser,
    getUsers,
    getProducts,


}