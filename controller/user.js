const { getUsers } = require('../midelware/user');



exports.getusers= async (req, res) => {
    var usersQuery = await getUsers  
    return res.json(usersQuery);
    }
