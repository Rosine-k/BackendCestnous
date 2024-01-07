const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const app = express();
const port = 3000;

// Middleware pour traiter les corps des requêtes en JSON
app.use(bodyParser.json());

// Middleware Helmet pour sécuriser les en-têtes HTTP
app.use(helmet());

// Middleware pour gérer les en-têtes CORS (permettre les requêtes depuis n'importe quel domaine)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Servir les fichiers statiques du frontend (par exemple, HTML, CSS, JavaScript)
app.use(express.static('frontend'));


app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});


module.exports = app;