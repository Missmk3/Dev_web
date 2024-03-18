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
        conn.release(); 
    }
}




//fonction asynchrone qui permet de récupérer les données d'un produits spécifique en fonction de son id en exécutant la requete sql
async function getProduct(id){
    return await query ('SELECT * FROM products WHERE id = ?', id)
}

// Récupérez toutes les données de la table "products"
async function getAllProducts() {
    const conn = await getConnection(); // ensuite obtention d'une connexion avec la bd
    try {
        const [rows, fields] = await conn.execute('SELECT * FROM products');
        return rows;
    } catch (error) { // en cas d'erreur envoie un message 
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release();
    }
}



// Récupérez toutes les données de la table "events"
async function getAllEvents() {
    const conn = await getConnection(); // ensuite obtention d'une connexion avec la bd
    try {
        const [rows, fields] = await conn.execute('SELECT * FROM events');
        return rows;
    } catch (error) { // en cas d'erreur envoie un message 
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release();
    }
}



// Récupérez toutes les données de la table "events"
async function getAllImages() {
    const conn = await getConnection(); // ensuite obtention d'une connexion avec la bd
    try {
        const [rows, fields] = await conn.execute('SELECT * FROM image');
        return rows;
    } catch (error) { // en cas d'erreur envoie un message 
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release();
    }
}


// Récupérez toutes les données de la table "Categories"
async function getAllCategories() {
    const conn = await getConnection(); // ensuite obtention d'une connexion avec la bd
    try {
        const [rows, fields] = await conn.execute('SELECT * FROM categorie');
        return rows;
    } catch (error) { // en cas d'erreur envoie un message 
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release();
    }
}


// Récupérez toutes les données de la table "commentaires"
async function getAllComments() {
    const conn = await getConnection(); // ensuite obtention d'une connexion avec la bd
    try {
        const [rows, fields] = await conn.execute('SELECT * FROM comments');
        return rows;
    } catch (error) { // en cas d'erreur envoie un message 
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release();
    }
}


// Récupérez toutes les données de la table "commentaires"
async function insertUser(name2, rename, email, password) {
    const conn = await getConnection(); // ensuite obtention d'une connexion avec la bd
    try {
        const [{ insertId }] = await conn.query('INSERT INTO `user` (name, `rename`, email, `password`) VALUES (?, ?, ?, ?)',
        [name2, rename, email, password]);        
        // res.status(202).json({
        // message: "User Created",
        // });
    } catch (error) { // en cas d'erreur envoie un message 
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release();
    }
}

// Récupérez toutes les données de la table "commentaires"
async function checkUser(email, password) {
    const conn = await getConnection(); // ensuite obtention d'une connexion avec la bd
    try {
        const [rows, fields] = await conn.query('SELECT * FROM `user` WHERE email = ? AND `password` = ?',
        [email, password]);
        return rows;        
        // res.status(202).json({
        // message: "User Created",
        // });
    } catch (error) { // en cas d'erreur envoie un message 
        console.error('Erreur lors de la requête SQL :', error);
        throw error;
    } finally {
        conn.release();
    }
}


// la fonction asynchrone retourne juste la fonction getAllusers et getAllproducts pour récupérer tt les données des utilisateurs et des produits
async function getUsers(){
    return await getAllUsers();
}

async function getProducts(){
    return await getAllProducts();
}

async function getEvents(){
    return await getAllEvents();
}

async function getImages(){
    return await getAllImages();
}


async function getCategories(){
    return await getAllCategories();
}

async function getComments(){
    return await getAllComments();
}

async function addUser(name2, rename, email, password){
    return await insertUser(name2, rename, email, password);
}

async function checkUserSignIn(email, password){
    return await checkUser(email, password);
}


module.exports = {
    getUser,
    getUsers,
    getProduct,
    getProducts,
    getEvents,
    getImages,
    getCategories,
    getComments,
    addUser,
    checkUserSignIn,
};