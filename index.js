const express = require("express");
const bodyParser = require("body-parser"); 
const port = process.env.PORT || 3000; // Utilisation de process.env.PORT pour le port
const app = express();
const routes = require('./controller/routes.js');


// app.use(bodyParser.urlencoded({extension: true }));
app.use(bodyParser.json());


app.listen(port, () => {
    console.log("Le serveur est en ligne sur le port " + port + " !");
});


app.get("/", (req, res) => {
    res.status(200).json({
        id:'',
        name:"KENGNI",
        rename:"mires",
        email:'kengnimires003@gmail',
        password:'',

    })

});

app.get("/stuff", (req, res) => {
    res.status(200).json({
        id:'',
        name:"TOKO",
        rename:"joseph",
        email:'',
        password:'',

    })

});

app.get("/lol", (req, res) => {
    res.status(200).json({
        id:'',
        name:"LOULOU",
        rename:"jean",
        email:'',
        password:'',

    })

    
});


