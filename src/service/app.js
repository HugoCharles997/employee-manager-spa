//npm install express
//npm install mongodb
//npm install body-parser
//npm install mongoose
//npm i -S cors
//npm install bson

const express = require('express');
const cors = require('cors');

const {connecter} = require('./common/dao');
const routesUser = require('./router/routes');

const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api", routesUser);

app.get('/', (req, res, next) => {
    res.send("Votre requete a bien été reçue ! ");
    next();
});

const port = process.env.PORT || 3000;

connecter("mongodb://127.0.0.1:27017/", (erreur) => {
    if (erreur){
        console.log('Error 404');
        process.exit(-1);
    } else {
        console.log('Connexion à la base de donnnées établie');
        app.listen(port, () => console.log('Attente des requets au port '+port+' ...'));
    }
});

// const { MongoClient, Db } = require("mongodb");

// let client = null;

// url = "mongodb://127.0.0.1:27017/";

// client = new MongoClient(url);

// client.connect();

// console.log('Connexion à la base de donnnées établie');

// app.listen(port, () => console.log('Attente des requets au port ' + port + ' ...'));