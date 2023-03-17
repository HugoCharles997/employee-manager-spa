const User = require('../common/schema');
const client = require('../common/dao');

client.connecter('mongodb://127.0.0.1:27017/');

const addUser = async (req, res) => {
	try
	{
		let user = new User({
            _id: Number(req.body.id),
			name: req.body.name,
			email : req.body.email,
			gender : req.body.gender,
			jobTitle: req.body.jobTitle
		});
    
		let cursor = await client
            .db()
			.collection("employes")
			.insertOne(user);
			
		res.status(200).json(cursor);
	}
	catch (error)
    {
		console.log(error);
		res.status(500).json(error);
	}
};

const getAllUsers = async (req, res) => {
	try
	{
        let cursor = client
            .db()
            .collection('employes')
            .find();

        let result = await cursor.toArray();
        if (result.length > 0)
        {
            res.status(200).json(result);
        }
        else
        {
            res.status(204).json({msg : 'Aucune employe trouvé.'});
        }
	}
	catch (error)
    {
		console.log(error);
		res.status(500).json(error);
	}
}

const getUserById = async (req, res) => {
    try
    {
        let cursor = client
            .db()
            .collection('employes')
            .find({_id : Number(req.query.id)});

        let result = await cursor.toArray();
        if (result.length > 0)
        {
            res.status(200).json(result[0]);
        }
        else
        {
            res.status(204).json({msg : "Cet employe n'existe pas"});
        }
    }
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
};

const editUser = async (req, res) => {
    try
    {
        let id = Number(req.query.id);

		let nName = req.body.name;
		let eEmail = req.body.email;
		let gGender = req.body.gender;
		let jJobTitle = req.body.jobTitle;
        
        let cursor = client
            .db()
            .collection('employes')
            .updateOne(
                {_id : id},
                {
                    $set : 
					{
                        name : nName,
						email: eEmail,
						gender: gGender,
						jobTitle: jJobTitle
                    }
                }
            );
        
        if (cursor.modifiedCount != 1)
        {
            res.status(200).json({msg : "Modification réussie"});
        } 
        else
        {
            res.status(404).json({msg : "Cet employe n'existe pas"});
        }
    } 
    catch (error)
    {
        console.log(error);
        res.status(500).json(error);
    }
};

const deleteUserById = async (req, res) => {
    try 
    {
        let id = Number(req.query.id);

        let cursor = client
            .db()
            .collection('employes')
            .deleteOne({_id : id});

            if (cursor.deletedCount != 1)
            {
                res.status(200).json({msg : "Suppression de " + id + " réussie"});
            }
            else
            {
                res.status(404).json({msg : "Il n'y a pas d'employe pour cet id"});
            }
    }
    catch (error) 
    {
        console.log(error);
        res.status(500).json(error);
    }
};

module.exports = {addUser, getAllUsers, getUserById, editUser, deleteUserById};