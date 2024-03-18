const { getUsers, addUser, checkUserSignIn } = require('../midellware/user');

exports.getusers= async (req, res, next) => {
    try {
    const users = await getUsers();
    res.json(users);
    } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
}

var Users = [];


exports.addusers= async (req, res, next) => {


    if(!req.body.name || !req.body.password){
        res.status("400");
        res.send("Invalid details!");
     } else {
        Users.filter(function(user){
           if(user.name === req.body.name){
              res.render('signup', {
                 message: "User Already Exists! Login or choose another user id"});
           }
        });
        var newUser = {name: req.body.name, rename: req.body.rename, email: req.body.email, password: req.body.password};

        Users.push(newUser);

        try{
            const users = await addUser(newUser.name, newUser.rename, newUser.email, newUser.password);
        } catch (error) {
            res.status(500).json({ error: 'Erreur lors de la récupération des données' });
        }

        if (!req.session) {
            req.session = {}; // Définir la session si elle est indéfinie
        }
   
        req.session.user = newUser;
        res.redirect('/users/protected_page');
     }



}

exports.checkusersignin = async (req, res, next) => {

    try {
        const users = await checkUserSignIn(req.body.email, req.body.password);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }

}
