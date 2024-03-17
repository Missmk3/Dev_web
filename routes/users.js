var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var multer = require('multer');
var upload = multer(); 
var cookieParser = require('cookie-parser');
const { getusers } = require('../controller/user');

var Users = [];

/* GET users listing. */
router.get('/', getusers);

router.get('/signup', function(req, res){
  res.render('signup', {
    message: "S'inscrire"});
});

router.post('/signup', function(req, res, next){
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

    if (!req.session) {
      req.session = {}; // Définir la session si elle est indéfinie
    }

     req.session.user = newUser;
     res.redirect('/users/protected_page');
  }
});

function checkSignIn(req, res){
  if(req.session.user){
     next();     //If session exists, proceed to page
  } else {
     var err = new Error("Not logged in!");
     console.log(req.session.user);
     next(err);  //Error, trying to access unauthorized page!
  }
}

router.get('/protected_page', checkSignIn, function(req, res){
  res.render('protected_page', {id: req.session.user.id})
});

router.get('/login', function(req, res){
  res.render('login', {message: "Connection"});
});

router.post('/login', function(req, res){
  console.log(Users);
  if(!req.body.name || !req.body.password){
     res.render('login', {message: "Please enter both id and password"});
  } else {
     Users.filter(function(user){
        if(user.name === req.body.name && user.password === req.body.password){
           req.session.user = user;
           res.redirect('/protected_page');
        }
     });
     res.render('login', {message: "Invalid credentials!"});
  }
});

router.get('/logout', function(req, res){
  req.session.destroy(function(){
     console.log("user logged out.")
  });
  res.redirect('/login');
});

router.use('/protected_page', function(err, req, res, next){
console.log(err);
  //User should be authenticated! Redirect him to log in.
  res.redirect('/users/login');
});


module.exports = router;
