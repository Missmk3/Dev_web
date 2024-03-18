var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var multer = require('multer');
var upload = multer(); 
var cookieParser = require('cookie-parser');
const { getusers, addusers, checkusersignin } = require('../controller/user');

var Users = [];

/* GET users listing. */
router.get('/', getusers);

router.get('/signup', function(req, res){
  res.render('signup', {
    message: "S'inscrire"});
});

router.post('/signup', addusers);

function checkSignIn(req, res, next){
  if(req.session && req.session.user){
    console.log(req.session.user);
    next();     //If session exists and user is defined, proceed to page
  } 
  // else {
  //   var err = new Error("Not logged in!");
  //   next(err);  //Error, trying to access unauthorized page!
  // }
}

router.get('/protected_page', checkSignIn, function(req, res){
  res.render('protected_page', {id: req.session.user.id})
});

router.get('/login', function(req, res){
  res.render('login', {message: "Connection"});
});

router.post('/login', checkusersignin);

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
