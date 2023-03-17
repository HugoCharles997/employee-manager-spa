// fonctions globales crud
import axios from 'axios';

export default {
    data() {
        return {
            users: null,
        }
    },
    created() {
        this.getAllUsers();
    },
    methods: {
        
        // Create
        addUser: async function(post) {
            await axios.post('http://localhost:3000/api/user', {
                id: post.id,
                name: post.name,
                email: post.email,
                gender: post.gender,
                jobTitle: post.jobTitle,
            })
            .catch(error => {
                console.log(error);
            });
        },

        // Read
        getAllUsers: async function() {
            try
            {
                const response = await axios.get('http://localhost:3000/api/user');
                this.users = response.data;
            }
            catch(error)
            {
                console.log(error);
            }
        },
        getUserById: async function(id) {
            await axios.get('http://localhost:3000/api/user', {
                params: {
                    id: id
                }
            })
            .catch(error => {
                console.log(error);
            });
        },

        // Update
        editUser: async function(id, post) {
            await axios.put('http://localhost:3000/api/user',
                {
                    // query string
                    params: {
                        id: id
                    }
                },
                {
                    // valeur de l'objet user
                    id: post.id,
                    name: post.name,
                    email: post.email,
                    gender: post.gender,
                    jobTitle: post.jobTitle,
                    published: true
                }
            )
            .catch(error => {
                console.log(error);
            });
        },

        // Delete
        deleteUser: async function(id) {
            await axios.delete('http://localhost:3000/api/user',
            {
                params: {
                    id: id
                }
            }
            )
            .catch(error => {
                console.log(error);
            });
        },
    }
}

