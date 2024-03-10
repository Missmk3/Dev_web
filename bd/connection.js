const mysql = require('mysql2/promise');
const config = require('./config');
const pool = mysql.createPool(config.db);

// Fonction pour obtenir une connexion à partir du pool
const getConnection = async () => {
    try {
      const connection = await pool.getConnection();
      return connection;
    } catch (error) {
      console.error('Erreur lors de la récupération de la connexion :', error);
      throw error;
    }
  };
  

async function query(sql, params) {

    // A simple SELECT query
    try {
    const [results, fields] = await connection.query(
        sql, params
    );
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
    } catch (err) {
    console.log(err);
    }

  return results;
}

module.exports = {
  query,
  getConnection,
}