const { query } = require("../bd/connection");

async function getUser(id){
    return await query ('SELECT*FROM user WHERE id = ?', id)
}
    
async function getUsers(){
    return await query ('SELECT * FROM user' )
}

module.exports = {
    getUser,
    getUsers,


}