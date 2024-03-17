const express = require("express");
const bodyParser = require("body-parser"); 
const { getusers } = require("./controller/user");
const userRoute  = require("./routes/user");
const categorieRoute = require("./routes/categorie");
const eventRoute = require("./routes/events");
const likeRoute = require("./routes/like");
const productRoute = require("./routes/product");
const imageRoute = require("./routes/image");
const port = process.env.PORT || 3000; // Utilisation de process.env.PORT pour le port
const app = express();

app.use(bodyParser.json());
app.use('/users',userRoute)
app.use('/categorie',categorieRoute)
app.use('/event',eventRoute)
app.use("/like",likeRoute)
app.use("/product",productRoute)
app.use("/image",imageRoute) 
app.use("/comment",commentRoute) 

    // res.send('Hello World!')

// app.get("/users",getusers);

app.listen(port, () => {
    console.log("Le serveur est en ligne sur le port " + port + " !");
});

