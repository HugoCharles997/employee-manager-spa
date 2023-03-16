const { MongoClient, Db } = require("mongodb");

let client = null;

const connecter = (url, callback) =>{
    if(client==null)
    {
        client = new MongoClient(url);

        client.connect((erreur) => {
            if(erreur)
            {
                client=null;
                callback(erreur);
            }
            else
            {
                callback();
            }
        })
    }
    else
    {
        callback();
    }
}

const db = () => {
    return new Db(client, "employes");
}

const fermerConnection = () => {
    client.close();
    client = null;
}

module.exports = {connecter, db, fermerConnection};