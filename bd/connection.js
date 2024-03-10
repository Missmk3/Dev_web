const mysql = require('mysql2/promise');
const config = require('./config');
const connection = mysql.createPool(config.db);

async function query(sql, params) {
  
  const [results, ] = await connection.execute(sql, params);
console.log(results);

  return results;
}

module.exports = {
  query
}