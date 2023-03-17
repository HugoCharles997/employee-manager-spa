// on initialise le serveur
const http = require('http');
const httpServer = http.createServer();

// pour les requestes http (httprequest)
const allowOrigins = ['http://localhost:3000/', 'http://localhost:3000/api/user'];
httpServer.on('request', (request, response) => {

    // On test si l'entête "Origin" fait partie des origines acceptées
    if (request.headers['origin'] && allowOrigins.includes(request.headers['origin']))
    {

        // Si oui alors on renseigne "Access-Control-Allow-Origin" avec l'origine de la requête
        response.setHeader('Access-Control-Allow-Origin', request.headers['origin']);
    } 
    else
    {

        // Sinon on renseigne "Access-Control-Allow-Origin" à null créant une erreur CORS dans le navigateur
        response.setHeader('Access-Control-Allow-Origin', 'null');
    }

    if (request.method === 'OPTIONS')
    {
        response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin, Authorization');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');

        return response.end();
    }

    // suite du traitement ...
});


const express = require('express');
const {
    addUser,
    getAllUsers,
    getUserById,
    editUser,
    deleteUserById
} = require('../model/model');

const router = express.Router();

// create
router.route("/user").post(addUser);

// read
router.route("/user").get(getAllUsers);
router.route("/user").get(getUserById);

// update
router.route("/user").put(editUser);

// delete
router.route("/user").delete(deleteUserById);
// router.route("/user").delete(deleteAllUsers);

module.exports = router;