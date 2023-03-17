/** Liste des dependences pour l'api */
// npm install express
// npm install mongodb
// npm install body-parser
// npm install mongoose
// npm i -S cors
// npm install bson

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

app.get('/api', (req, res, next) => {
    res.send("Votre requete a bien été reçue ! ");
    next();
});

// port que l'on va utiliser
const port = process.env.PORT || 3000;

// connexion a la bdd mongo
connecter("mongodb://127.0.0.1:27017/", (erreur) => {
    if (erreur)
    {
        console.log('Error 404');
        process.exit(-1);
    }
    else
    {
        // mise en place du serveur si connexion à la bdd reussi

        console.log('Connexion à la base de donnnées établie');
        app.listen(port, () => console.log('Attente des requets au port ' + port + ' ...'));
    }
});