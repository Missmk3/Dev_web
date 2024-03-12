const express = require("express");
const bodyParser = require("body-parser"); 
const { getusers } = require("./controller/user");
const port = process.env.PORT || 3000; // Utilisation de process.env.PORT pour le port
const app = express();

app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get("/users",getusers);


app.listen(port, () => {
    console.log("Le serveur est en ligne sur le port " + port + " !");
});

